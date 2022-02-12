import config from 'config'
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(config.database.supabase.url, config.database.supabase.anon_key)
