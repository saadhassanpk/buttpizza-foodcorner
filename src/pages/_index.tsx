import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { ArrowRight, ArrowUpRight, Facebook, Flame, Instagram, MapPin, Menu, MessageCircle, Phone, X, MoveDown, Navigation, ChevronDown } from "lucide-react";
import { Button } from "../components/Button";
import { useScrollReveal } from "../helpers/useScrollReveal";
import styles from "./_index.module.css";

const PHONE = "+923216482900";
const CALL = "tel:+923216482900";
const INSTAGRAM = "https://instagram.com/buttpizza1";
const FACEBOOK = "https://www.facebook.com/share/19sHc7zEAX/";
const MAPS = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Milad-e-Mustafa Chowk, near Ghanta Ghar, Gujranwala, Pakistan");
const WA = (text: string) => `https://wa.me/${PHONE.replace("+", "")}?text=${encodeURIComponent(text)}`;
const ORDER = WA("Hi Butt Pizza & Food Corner! I'd like to place an order. Please share your current menu and availability.");
const MENU_WA = WA("Assalamualaikum! Can you please send me Butt Pizza & Food Corner's latest menu, prices and available deals?");
const JUNGLI_WA = WA("Assalamualaikum! I want to order the Jungli Fillet Burger. Please share the current price and ordering details.");
const cards = [
  { key: "Burgers", number: "01", eyebrow: "THE SIGNATURE", title: "JUNGLI FILLET", image: "/images/burger-detail.png", description: "Crispy outside. Juicy inside. Finished with creamy sauces.", action: JUNGLI_WA, cta: "ASK ABOUT JUNGLI" },
  { key: "Pizza", number: "02", eyebrow: "PIZZA CRAVINGS", title: "PIZZA TIME", image: "/images/pizza.png", description: "Got pizza on your mind? Ask us what's on the menu today.", action: MENU_WA, cta: "SEE CURRENT MENU" },
  { key: "More", number: "03", eyebrow: "SOMETHING EXTRA", title: "CRAVE MORE", image: "/images/fries.png", description: "Find out what else is available to go with your order.", action: MENU_WA, cta: "EXPLORE THE MENU" },
];
const filters = ["All", "Burgers", "Pizza", "More"];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const heroReveal = useScrollReveal({ threshold: 0.05 });
  const featuredReveal = useScrollReveal({ threshold: 0.08 });
  const menuReveal = useScrollReveal({ threshold: 0.06 });
  const visitReveal = useScrollReveal({ threshold: 0.06 });
  const visibleCards = filter === "All" ? cards : cards.filter((item) => item.key === filter);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={styles.page} id="top">
      <Helmet>
        <title>Butt Pizza & Food Corner | The King of Crunch — Gujranwala</title>
        <meta name="description" content="Meet the Jungli Fillet Burger — crispy, juicy and loaded with creamy sauces. Visit Butt Pizza & Food Corner near Ghanta Ghar, Gujranwala. Call or order via WhatsApp." />
        <meta name="theme-color" content="#12110e" />
        <meta property="og:title" content="Butt Pizza & Food Corner — The King of Crunch" />
        <meta property="og:description" content="Gujranwala, meet your next craving. Explore the Jungli Fillet Burger, get the latest menu and order directly." />
      </Helmet>

      <div className={styles.announcement}>
        <span><Flame size={13} fill="currentColor" /> GUJRANWALA, YOUR CRAVINGS HAVE A NEW ADDRESS</span>
        <a href="#visit">FIND US <ArrowUpRight size={14} /></a>
      </div>

      <header className={styles.header}>
        <div className={styles.navbar}>
          <a href="#top" className={styles.brand} onClick={closeMenu} aria-label="Butt Pizza & Food Corner, back to top">
            <span className={styles.brandIcon}><Flame size={21} strokeWidth={2.7} fill="currentColor" /></span>
            <span className={styles.brandText}><strong>BUTT <em>PIZZA.</em></strong><small>FOOD CORNER · GUJRANWALA</small></span>
          </a>
          <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`} aria-label="Main navigation">
            <a href="#signature" onClick={closeMenu}>The signature</a>
            <a href="#menu" onClick={closeMenu}>Explore food</a>
            <a href="#story" onClick={closeMenu}>Our vibe</a>
            <a href="#visit" onClick={closeMenu}>Find us</a>
            <a href={ORDER} className={styles.mobileNavOrder} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>ORDER NOW <ArrowUpRight size={15} /></a>
          </nav>
          <div className={styles.navActions}>
            <span className={styles.navCall}>HUNGRY? <a href={CALL}>0321-6482900</a></span>
            <Button asChild className={styles.navOrder}><a href={ORDER} target="_blank" rel="noopener noreferrer">ORDER NOW <ArrowUpRight size={17}/></a></Button>
            <Button variant="ghost" size="icon" className={styles.mobileMenuButton} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={26} /> : <Menu size={26}/>}
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroPhoto} role="img" aria-label="Illustrative photograph of a crispy chicken fillet burger" />
          <div className={styles.heroPhotoFade} />
          <div className={styles.heroTexture} aria-hidden="true" />
          <div className={styles.heroInner}>
            <div className={`${styles.heroCopy} ${styles.reveal}`} ref={heroReveal}>
              <div className={styles.eyebrow}><span className={styles.yellowLine} /> MEET YOUR NEXT OBSESSION <span className={styles.tinyStar}>✳</span></div>
              <h1 id="hero-title">GO BIG.<br/>GO <span>JUNGLI.</span></h1>
              <p className={styles.heroSubtitle}>THE KING OF <strong>CRUNCH.</strong></p>
              <p className={styles.heroDescription}>Ridiculously crispy. Seriously juicy. Drenched in creamy goodness. The Jungli Fillet Burger doesn’t do ordinary.</p>
              <div className={styles.heroButtons}>
                <Button asChild size="lg" className={styles.primaryBtn}><a href={JUNGLI_WA} target="_blank" rel="noopener noreferrer">ORDER THE JUNGLI <ArrowUpRight size={19}/></a></Button>
                <Button asChild variant="outline" size="lg" className={styles.outlineBtn}><a href="#menu">EXPLORE FOOD <ArrowRight size={19}/></a></Button>
              </div>
              <div className={styles.heroBottom}><span className={styles.heroSmallCircle}><Flame size={16} /></span><span>MADE FOR SERIOUS FOOD CRAVINGS.</span></div>
            </div>
            <div className={styles.heroSideNote} aria-hidden="true"><span>01 / THE SIGNATURE</span><span>SCROLL TO EXPLORE <MoveDown size={16}/></span></div>
          </div>
          <div className={styles.cornerNumber} aria-hidden="true">01</div>
        </section>

        <div className={styles.ticker} aria-label="Crispy, juicy, saucy, repeat">
          <div className={styles.tickerTrack}>
            {Array.from({length: 4}).map((_,i) => <span key={i}>CRISPY <span>✳</span> JUICY <span>✳</span> SAUCY <span>✳</span> REPEAT <span>✳</span></span>)}
          </div>
        </div>

        <section id="signature" className={styles.signatureSection}>
          <div className={`${styles.sectionShell} ${styles.signatureLayout} ${styles.reveal}`} ref={featuredReveal}>
            <div className={styles.signaturePhotoCol}>
              <div className={styles.signaturePhotoFrame}><img src="/images/burger-detail.png" alt="Illustrative close-up of a crispy chicken burger with sauce" loading="lazy"/></div>
              <div className={styles.roundStamp}><span>THE KING OF<br/>CRUNCH</span><Flame size={23} fill="currentColor" /></div>
            </div>
            <div className={styles.signatureCopy}>
              <div className={styles.eyebrow}><span className={styles.yellowLine}/> MEET THE MAIN CHARACTER</div>
              <p className={styles.sectionKicker}>THE BURGER THAT DOESN'T PLAY NICE.</p>
              <h2>THE<br/><span>JUNGLI</span><br/>FILLET.</h2>
              <p className={styles.bodyCopy}>A full-on flavour experience: an irresistibly crunchy chicken fillet, juicy at the centre and loaded with creamy sauces. One bite and you'll understand the hype.</p>
              <div className={styles.attributes}>
                <div><span>01</span><strong>LOUD CRUNCH</strong><small>Golden & crispy</small></div>
                <div><span>02</span><strong>JUICY CENTRE</strong><small>Full flavour</small></div>
                <div><span>03</span><strong>SAUCY FINISH</strong><small>Creamy goodness</small></div>
              </div>
              <Button asChild className={styles.textCta}><a href={JUNGLI_WA} target="_blank" rel="noopener noreferrer">I NEED THIS BURGER <ArrowUpRight size={20}/></a></Button>
            </div>
          </div>
        </section>

        <section id="menu" className={styles.menuSection}>
          <div className={styles.sectionShell}>
            <div className={`${styles.menuTop} ${styles.reveal}`} ref={menuReveal}>
              <div><p className={styles.eyebrow}><span className={styles.yellowLine}/> GOOD FOOD. BIG MOOD.</p><h2>WHAT ARE YOU<br/><span>CRAVING?</span></h2></div>
              <div className={styles.menuTopRight}><p>There's always a reason to eat something good. Explore the vibe, then ask us what's cooking today.</p><div className={styles.filters} role="group" aria-label="Filter food categories">{filters.map(f => <Button key={f} variant={filter === f ? "primary" : "ghost"} size="sm" className={`${styles.filter} ${filter===f ? styles.activeFilter : ""}`} onClick={()=>setFilter(f)} aria-pressed={filter === f}>{f}</Button>)}</div></div>
            </div>
            <div className={styles.menuGrid}>
              {visibleCards.map(card => (
                <article key={card.key} className={styles.foodCard}>
                  <div className={styles.foodImage}><img src={card.image} alt={`Illustrative food photograph for ${card.title}`} loading="lazy"/><span className={styles.foodNumber}>{card.number} / 03</span></div>
                  <div className={styles.foodInfo}><div className={styles.foodLabel}>{card.eyebrow}</div><h3>{card.title}</h3><p>{card.description}</p><a href={card.action} target="_blank" rel="noopener noreferrer">{card.cta} <ArrowUpRight size={18}/></a></div>
                </article>
              ))}
            </div>
            <div className={styles.menuNotice}><span>Photos are illustrative. Availability and pricing are confirmed directly with the restaurant.</span><Button asChild variant="outline" className={styles.menuRequest}><a href={MENU_WA} target="_blank" rel="noopener noreferrer">REQUEST FULL MENU <ArrowUpRight size={17}/></a></Button></div>
          </div>
        </section>

        <section id="story" className={styles.manifesto}>
          <div className={styles.manifestoPattern} aria-hidden="true">B P</div>
          <div className={styles.manifestoInner}>
            <div className={styles.eyebrowDark}>✳ NOT HERE TO BE FORGOTTEN ✳</div>
            <h2>YOUR CRAVINGS.<br/><em>OUR WHOLE VIBE.</em></h2>
            <p>Come for the crunch. Stay for the flavour. And bring your appetite.</p>
            <Button asChild className={styles.darkBtn}><a href={ORDER} target="_blank" rel="noopener noreferrer">LET'S EAT <ArrowUpRight size={20}/></a></Button>
          </div>
        </section>

        <section id="visit" className={styles.visitSection}>
          <div className={`${styles.sectionShell} ${styles.visitGrid} ${styles.reveal}`} ref={visitReveal}>
            <div className={styles.visitCopy}><p className={styles.eyebrow}><span className={styles.yellowLine}/> YOUR NEXT FOOD STOP</p><h2>FIND YOUR<br/><span>WAY HERE.</span></h2><p className={styles.visitIntro}>We're right in the heart of Gujranwala. The only thing missing is you.</p><div className={styles.address}><MapPin size={27}/><div><small>OUR LOCATION</small><strong>Milad-e-Mustafa Chowk,<br/>Near Ghanta Ghar,<br/>Gujranwala, Pakistan</strong></div></div><div className={styles.contactActions}><Button asChild size="lg" className={styles.primaryBtn}><a href={MAPS} target="_blank" rel="noopener noreferrer">GET DIRECTIONS <Navigation size={19}/></a></Button><Button asChild variant="outline" size="lg" className={styles.outlineBtn}><a href={CALL}>CALL US <Phone size={18}/></a></Button></div></div>
            <div className={styles.visitVisual}><div className={styles.pinCircle}><MapPin size={46}/></div><div className={styles.visitPattern}>GUJRANWALA</div><div className={styles.visitVisualBottom}><span>0321-6482900</span><span>COME HUNGRY. <ArrowUpRight size={16}/></span></div></div>
          </div>
        </section>

        <section className={styles.socialStrip}><div className={styles.sectionShell}><span>HUNGRY FOR MORE?</span><strong>FOLLOW THE FLAVOUR.</strong><div><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Butt Pizza on Instagram"><Instagram size={20}/> INSTAGRAM <ArrowUpRight size={15}/></a><a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="Butt Pizza on Facebook"><Facebook size={20}/> FACEBOOK <ArrowUpRight size={15}/></a></div></div></section>
      </main>

      <footer className={styles.footer}><div className={styles.sectionShell}><div className={styles.footerTop}><div className={styles.footerWordmark}>BUTT <span>PIZZA.</span><small>FOOD CORNER</small></div><div className={styles.footerRight}><p>BIG FLAVOUR.<br/>NO SMALL CRAVINGS.</p><a href="#top">BACK TO TOP ↑</a></div></div><div className={styles.footerBottom}><span>© {new Date().getFullYear()} BUTT PIZZA & FOOD CORNER.</span><span>MILAD-E-MUSTAFA CHOWK, GUJRANWALA.</span><span><a href={CALL}>0321-6482900</a></span></div></div></footer>

      <a href={ORDER} className={styles.whatsappFloat} target="_blank" rel="noopener noreferrer" aria-label="Order on WhatsApp"><MessageCircle size={25} fill="currentColor"/><span>CHAT & ORDER</span></a>
      <div className={styles.mobileBottomBar}><a href={CALL}><Phone size={18}/> CALL</a><a href={ORDER} target="_blank" rel="noopener noreferrer"><MessageCircle size={18}/> ORDER ON WHATSAPP <ArrowUpRight size={16}/></a></div>
    </div>
  );
}