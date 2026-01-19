export const GET = async () => {
	const ics = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Saru & Sanyog Wedding//Save The Date//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:saru-sanyog-wedding-2025@my-skeleton-app
DTSTAMP:20250312T000000Z
DTSTART:20250312T120000Z
DTEND:20250312T180000Z
SUMMARY:Saru & Sanyog Wedding
DESCRIPTION:Join us as we celebrate our love and commitment!
LOCATION:Save The Date
STATUS:CONFIRMED
SEQUENCE:0
END:VEVENT
END:VCALENDAR`;

	return new Response(ics, {
		headers: {
			'Content-Type': 'text/calendar; charset=utf-8',
			'Content-Disposition': 'inline; filename="Saru-Sanyog-Wedding.ics"'
		}
	});
};
