const About = () => {
  return (
    <div className="about">
      <div className="row">
        <div className="col">
          <div className="container text-center">
            <h1>About Ramen</h1>
            <img
              className=" img-fluid"
              src="https://firebasestorage.googleapis.com/v0/b/potoro-5fe55.appspot.com/o/ramen%2F79.jpg?alt=media&token=811eef74-ebe2-4a09-afd3-06ec6e57bb45"
              alt="vending machine of different ramens"
              style={{ width: "300px" }} // 設置寬度以縮小圖片

            />
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <div className="container">
            <p className="mb-4">
              拉麵是一道在日本深受喜愛的料理，其濃郁的湯頭、彈牙的麵條和豐富的配料組成了獨特的美食體驗。在動漫《火影忍者》中，主角鳴人最愛的就是一樂拉麵，這家拉麵店不僅是鳴人和朋友們聚會的地方，也是許多粉絲心中的經典場景。而在《數碼寶貝02》中，大輔則夢想著長大後能開一家拉麵店，他對拉麵充滿熱情，每當冒險之餘，他總幻想著自己未來經營著一間充滿笑聲和美味的拉麵店，帶給人們像拉麵湯頭般溫暖的感受。這些動漫中的場景展現了拉麵作為日本文化的一部分，帶給人們滿足與能量。
            </p>
            <p>
              Ramen is a dish deeply loved in Japan, with its rich broth,
              springy noodles, and a variety of toppings creating a unique
              culinary experience. In the anime *Naruto*, the protagonist
              Naruto's favorite food is Ichiraku Ramen. This ramen shop is not
              only a place where Naruto and his friends gather, but also a
              classic scene in the hearts of many fans. In *Digimon Adventure
              02*, Daisuke dreams of opening his own ramen shop when he grows
              up. He is passionate about ramen, and during his adventures, he
              often imagines running a ramen shop filled with laughter and
              delicious flavors, bringing warmth to people, much like the ramen
              broth itself. These anime scenes illustrate how ramen, as a part
              of Japanese culture, brings people satisfaction and energy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
