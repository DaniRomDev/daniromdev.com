import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from 'services/supabase';

export default async function (req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const { data: page_views, error } = await supabase.from('page_views')
            .select('views_count')
            .filter('slug', 'eq', req.query.slug)
            .filter('lang', 'eq', req.query.lang);

        console.log("las page views ", page_views)
        if (page_views) {
            return res.status(200).json({
                total: page_views[0]?.views_count || 0
            });
        }

        return res.status(501).json({ error })

    }

    if (req.method === 'POST') {
        const { data, error } = await supabase.rpc(
            'increment_page_view',
            { page_slug: req.query.slug, lang: req.query.lang });

        if (data) {
            return res.status(201).json({
                message: `Successfully incremented page: ${req.query.slug} on language ${req.query.lang}`
            });
        }

        return res.status(501).json({ error })

    }



    return res.status(400).json({
        message: 'Unsupported Request'
    });
};
