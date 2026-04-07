interface TL { days: number; hours: number; minutes: number; seconds: number; }

const CD = ({ v, l }: { v: number; l: string }) => (
    <div className="cd-unit">
        <div className="cd-digit">{String(v).padStart(2, '0')}</div>
        <div className="cd-label">{l}</div>
    </div>
);

export default function Countdown({ time }: { time: TL }) {
    const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <div className="glass" style={{ padding: 'clamp(22px,3vw,32px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 24 }}>
            <div>
                <div className="t-label" style={{ marginBottom: 6 }}>Event Countdown</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', fontWeight: 500 }}>Time until doors open</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
                <CD v={time.days} l="Days" />
                <div className="cd-sep">:</div>
                <CD v={time.hours} l="Hours" />
                <div className="cd-sep">:</div>
                <CD v={time.minutes} l="Mins" />
                <div className="cd-sep">:</div>
                <CD v={time.seconds} l="Secs" />
            </div>
            <button onClick={() => go('contact')} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Register Now</button>
        </div>
    )
}