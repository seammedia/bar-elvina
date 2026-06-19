import { ROOMS } from "@/lib/config";

export function Rooms() {
  return (
    <section id="rooms" className="rooms">
      <div className="container">
        <div className="rooms-head">
          <span className="eyebrow">The Rooms</span>
          <h2>Five spaces, one view.</h2>
          <p>
            The beauty of Elvina is the choice. Five distinct areas, each with
            its own feel, from the intimate Foyer to the open Garden out back.
            Something for every occasion.
          </p>
        </div>
        <div className="rooms-grid">
          {ROOMS.map((room) => (
            <div key={room.name} className="room-card">
              <div className="room-photo">
                {room.image ? (
                  <img src={room.image} alt={room.name} />
                ) : (
                  <div className="room-photo-placeholder">
                    <span className="placeholder-label">PHOTOGRAPHY</span>
                  </div>
                )}
              </div>
              <div className="room-body">
                <div className="room-name-row">
                  <h3>{room.name}</h3>
                  <span className="room-cap">{room.capacity}</span>
                </div>
                <p>{room.desc}</p>
              </div>
            </div>
          ))}
          <div className="room-card room-card-cta">
            <div className="room-body">
              <h3>Host with us.</h3>
              <p>
                From a long lunch to a private function, we&apos;ll match the
                space to the occasion.
              </p>
              <a href="/functions" className="btn btn-tan">Functions &amp; Events</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
