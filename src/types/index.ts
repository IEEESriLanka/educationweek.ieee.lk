export interface NavLink    { label: string; href: string; isExternal?: boolean; }
export interface HeroStat   { value: string; label: string; suffix?: string; }
export interface Feature    { id: string; title: string; description: string; icon: string; color: string; }
export interface Speaker    { id: string; name: string; title: string; affiliations: string[]; imageUrl: string; }
export type ScheduleTrack   = 'school' | 'undergraduate' | 'graduate';
export interface ScheduleSession {
  id: string; time: string; title: string;
  tracks: ScheduleTrack[]; type: 'ceremony'|'session'|'break'|'workshop'|'networking';
  speaker?: string;
}
export interface Organizer  { id: string; name: string; logoUrl?: string; type: 'organizer'|'collaboration'|'support'; }
export interface Partner    { id: string; name: string; logoUrl?: string; tier: 'title'|'ecosystem'|'ai-knowledge'|'industry'|'stem'; }
export interface ContactPerson { id: string; name: string; role: string; organization: string; phone: string; email: string; }
export interface SectionProps  { id?: string; className?: string; }
