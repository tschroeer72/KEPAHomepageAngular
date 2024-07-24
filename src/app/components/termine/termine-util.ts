import { EventInput } from '@fullcalendar/core';

let eventGuid = 0;

export function createEventId() {
    return String(eventGuid++);
}

export function generateEvents() : EventInput[] {
    let evts : EventInput[] = [
        {
            id: createEventId(),
            title: '',
            start: new Date(),
            end: new Date()
        }
    ];

    const beginnTime = 'T19:00:00';
    const endTime = 'T21:30:00';

    const currentYear = new Date().getFullYear();
    console.log('currentYear = ' + currentYear);

    const currentDay = new Date();
    console.log('currentDay = ' + currentDay.toLocaleDateString('de-DE'));

    const firstDay = new Date(currentYear, 0, 1);
    console.log('firstDay = ' + firstDay.toLocaleDateString('de-DE'));

    const weekDay = firstDay.getDay();
    console.log('weekDay = ' + weekDay);
    const dayOffset = 3 - weekDay + 1;
    console.log('dayOffset = ' + dayOffset);

    const firstEvent = new Date(firstDay);
    firstEvent.setDate(firstDay.getDate() + dayOffset);
    console.log('firstEvent = ' + firstEvent.toLocaleDateString('de-DE'));

    evts.pop();
    let evt = {
        id: createEventId(),
        title: 'Kegeln',
        start: firstEvent.toISOString().replace(/T.*$/, '') + beginnTime,
        end: firstEvent.toISOString().replace(/T.*$/, '') + endTime
    };
    console.table(evt);
    evts.push(evt);

    let nextEvent = new Date(firstEvent);
    nextEvent.setDate(firstEvent.getDate() + 14);
    console.log('nextEvent = ' + nextEvent.toLocaleDateString('de-DE'));

    while(nextEvent.getFullYear() === currentYear) {
        // if(nextEvent.getMonth() >= currentDay.getMonth()) {
            evt = {
                id: createEventId(),
                title: 'Kegeln',
                start: nextEvent.toISOString().replace(/T.*$/, '') + beginnTime,
                end: nextEvent.toISOString().replace(/T.*$/, '') + endTime
            };
            console.table(evt);
            evts.push(evt);
        // }

        nextEvent.setDate(nextEvent.getDate() + 14);
        console.log('nextEvent = ' + nextEvent.toLocaleDateString('de-DE'));
    }
    console.table(evts);
    return evts;
}