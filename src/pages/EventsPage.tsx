import React from 'react';

function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Upcoming Events</h1>
      <div className="grid gap-6">
        <p className="text-gray-600">No events scheduled at this time.</p>
      </div>
    </div>
  );
}

export default EventsPage;