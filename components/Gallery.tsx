export default function Gallery() {
  return (
    <section>
      <h2>Photo Gallery</h2>
      {/* Add your photo thumbnails here */}
      <div>
        <img src="/sample1.jpg" alt="Sample 1" width={200} />
        <img src="/sample2.jpg" alt="Sample 2" width={200} />
      </div>
    </section>
  );
}