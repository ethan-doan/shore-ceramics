import "../styles/Home.css";
import Socials from "./Socials.tsx";

function Home() {
  return (
    <div className="home-container fade-in">
      <div className="home-image-array">
        <img
          className="home-image"
          src="/media/PurpleMug.jpg"
          alt="purple mug"
        />
        <img className="home-image" src="/media/RedVase.jpg" alt="red vasel" />
        <img
          className="home-image"
          src="/media/GreenMugTall.jpg"
          alt="green planter"
        />
      </div>
      <div className="home-about-me">
        <div className="home-about-me-content">
          <div className="home-about-me-header">Handmade Pottery</div>
          <div className="home-about-me-description">
            Hi, I’m Lauren and I’ve been doing pottery for as long as I can
            remember. I started in art class in elementary school, and really
            focused on throwing on the wheel in high school. Now that I’m in my
            twenties, I’ve rediscovered my passion for ceramics! Take a look
            around at my recent work and contact me about commissions or to
            purchase a piece. Currently hand delivery in Omaha, and shipping
            throughout the US.
          </div>
        </div>
        {/* <div className="home-about-me-tiktok">
                    <blockquote
                        className="tiktok-embed"
                        cite="https://www.tiktok.com/@shoreceramics/video/7492949399413345567"
                        data-video-id="7492949399413345567"
                        style={{ maxWidth: "605px", minWidth: "325px" }}
                    >
                        <section>
                            <a
                                target="_blank"
                                title="@shoreceramics"
                                href="https://www.tiktok.com/@shoreceramics?refer=embed"
                            >
                                @shoreceramics
                            </a>
                            big ole planter 6lbs{" "}
                            <a
                                title="pottery"
                                target="_blank"
                                href="https://www.tiktok.com/tag/pottery?refer=embed"
                            >
                                #pottery
                            </a>
                            <a
                                title="ceramics"
                                target="_blank"
                                href="https://www.tiktok.com/tag/ceramics?refer=embed"
                            >
                                #ceramics
                            </a>
                            <a
                                title="potterytiktok"
                                target="_blank"
                                href="https://www.tiktok.com/tag/potterytiktok?refer=embed"
                            >
                                #potterytiktok
                            </a>
                            <a
                                title="potterywheel"
                                target="_blank"
                                href="https://www.tiktok.com/tag/potterywheel?refer=embed"
                            >
                                #potterywheel
                            </a>
                            <a
                                title="clay"
                                target="_blank"
                                href="https://www.tiktok.com/tag/clay?refer=embed"
                            >
                                #clay
                            </a>
                            <a
                                title="planter"
                                target="_blank"
                                href="https://www.tiktok.com/tag/planter?refer=embed"
                            >
                                #planter
                            </a>
                            <a
                                title="plantsoftiktok"
                                target="_blank"
                                href="https://www.tiktok.com/tag/plantsoftiktok?refer=embed"
                            >
                                #plantsoftiktok
                            </a>
                            <a
                                target="_blank"
                                title="♬ オリジナル楽曲  - ライディーン"
                                href="https://www.tiktok.com/music/オリジナル楽曲-ライディーン-7343966047912069889?refer=embed"
                            >
                                ♬ オリジナル楽曲 - ライディーン
                            </a>
                        </section>
                    </blockquote>
                    <script
                        async
                        src="https://www.tiktok.com/embed.js"
                    ></script>
                </div> */}
      </div>
      <Socials />
    </div>
  );
}

export default Home;
