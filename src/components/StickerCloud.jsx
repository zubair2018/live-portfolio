export default function StickerCloud() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block" aria-hidden="true">
      <div className="sticker sticker-creative">
        <span className="sticker-spark">✦</span>
        creative mode
      </div>
      <div className="sticker sticker-orbit">
        <span>build</span><span>✦</span><span>create</span><span>✦</span>
      </div>
      <div className="sticker sticker-note">
        <span className="sticker-arrow">↗</span>
        <span>made with<br />good energy</span>
      </div>
      <div className="sticker sticker-star">✦</div>
      <div className="sticker sticker-cursor">click<br />around</div>
    </div>
  );
}
