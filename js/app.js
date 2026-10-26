/**
 * Hover21 Magazine — Sleek Vogue-Style Minimalist Luxury
 * Core Interactive Application Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // Editorial Database with full articles and attributions
  const articles = {
    'vs-show': {
      category: 'Column',
      author: "Shane O'Neill",
      date: 'October 24, 2026',
      readTime: '6 min read',
      image: 'assets/images/hero_column.png',
      title: "The Victoria’s Secret show wasn’t subtle — and it totally worked",
      summary: "Maximalism, unapologetic glitter, and the triumphant return of theatrical spectacle proved high-voltage glamour is back.",
      content: `
        <p>There was a moment halfway through the lights going down at the Brooklyn Navy Yard when subtlety was politely asked to leave the premises. Giant white wings, iridescent crystal fringe, and an orchestra tuned to peak adrenaline signaled that fashion's pendulum had swung violently away from quiet luxury and straight into operatic grandeur.</p>
        <p class="reader-pullquote">"Spectacle isn't just about entertainment; it's about unapologetic joy. After years of muted beige, the runway demanded to be seen from outer space."</p>
        <p>Led by an electric cast including Kylie Jenner in floor-grazing celestial wings, the showcase dismantled the polite minimalist codes that dominated the early 2020s. Fashion critics who once dismissed the spectacle were forced to reckon with the raw emotional resonance of theatrical fashion.</p>
        <p>What made the evening work was not nostalgia, but reinvention. The corsetry was deconstructed, the staging was cinematic, and the energy was unapologetically modern. In an era where fashion often feels tailored strictly for algorithmic consumption, seeing physical human drama unfold with this degree of craftsmanship was nothing short of exhilarating.</p>
      `
    },
    'culture-conversations': {
      category: 'Cover Story',
      author: 'Editorial Desk',
      date: 'October 24, 2026',
      readTime: '8 min read',
      image: 'assets/images/hero_cover.png',
      title: 'Inside the conversations shaping culture this week',
      summary: 'From artificial intelligence reshaping design ateliers to the emerging power brokers of international media.',
      content: `
        <p>Every decade experiences an inflection point where technological disruption, political tension, and artistic rebellion collide to form a brand new cultural language. We are living through that inflection point right now.</p>
        <p class="reader-pullquote">"The people defining culture today are not sitting in traditional ivory towers. They are building in code, designing in virtual spaces, and commanding global audiences directly."</p>
        <p>Across design studios in Milan, tech campuses in Silicon Valley, and underground creative collectives in Seoul, the boundaries between disciplines have dissolved completely. High fashion houses are appointing digital architects as creative leads, while engineers are styling capsule collections.</p>
        <p>In this comprehensive investigation, Hover21 sits down with the thinkers, disruptors, and visionaries whose daily decisions will define how we dress, communicate, and create for the next quarter century.</p>
      `
    },
    'front-row-faces': {
      category: 'Culture',
      author: 'Elena Thorne',
      date: 'October 23, 2026',
      readTime: '5 min read',
      image: 'assets/images/hero_culture.png',
      title: 'The new faces redefining the front row',
      summary: 'How global music ambassadors and Gen-Z creative icons have permanently transformed the gravity and business of Paris Fashion Week.',
      content: `
        <p>Gone are the days when the front row was strictly reserved for Parisian society darlings and legacy magazine editors. Today, the epicenter of fashion week gravity belongs to global cultural phenomena—most prominently exemplified by South Korean icons like Kim Taehyung and their international creative peers.</p>
        <p class="reader-pullquote">"When Taehyung steps out of a car outside the Grand Palais, the decibel level doesn't just rival a stadium concert—it shifts the stock price of luxury conglomerates."</p>
        <p>This seismic shift has fundamentally changed how luxury fashion communicates. Designers no longer craft runway presentations solely for an exclusive audience in Paris; they are broadcasting to hundreds of millions of fiercely passionate digital natives across Tokyo, Los Angeles, London, and Seoul.</p>
        <p>These new front-row luminaries bring a fluid, boundary-breaking approach to tailoring, skincare, and gender expression, creating a more inclusive and visually exciting global tapestry.</p>
      `
    },
    'runway-wings': {
      category: 'Runway',
      author: "Shane O'Neill",
      date: 'October 22, 2026',
      readTime: '4 min read',
      image: 'assets/images/fashion_wings.png',
      title: 'Wings, glitter and a season of full-volume glamour',
      summary: 'Dramatic featherwork, crystal fringe, and an electrifying refusal to play quiet on autumn runways.',
      content: `
        <p>Fashion houses across the globe are officially rejecting austerity. From Paris to New York, autumn runways showcased voluminous feathered capes, intricate hand-beaded crystal shifts, and silhouettes designed to occupy space.</p>
        <p class="reader-pullquote">"Dressing up is an act of defiance. When the world feels unpredictable, glamour provides armor."</p>
        <p>Stylists are pairing dramatic statement outerwear with minimalist footwear, creating a high-contrast balance that feels effortless rather than costume-like. Here are the runway moments you need to know this season.</p>
      `
    },
    'pink-statement': {
      category: 'Style',
      author: 'Maya Lin',
      date: 'October 21, 2026',
      readTime: '5 min read',
      image: 'assets/images/fashion_pink.png',
      title: 'Pink returns, and it is not playing quiet',
      summary: 'Forget muted pastels: high-saturation fuchsia and shimmering magenta make their grand couture entrance.',
      content: `
        <p>Just when you thought Barbiecore had faded into the trend archives, pink has resurfaced with a fierce, mature edge. Shimmering lamé, architectural corsets, and laser-cut evening gowns prove that pink is the ultimate statement of authority.</p>
        <p class="reader-pullquote">"This isn't sweet or timid pink. This is neon power dressing with a decadent 1980s couture finish."</p>
        <p>Seen on world tours and red carpets, the new wave of magenta and raspberry tones is commanding attention and proving that color confidence is the trend of the decade.</p>
      `
    },
    'beauty-blush': {
      category: 'Makeup',
      author: 'Camille Dubois',
      date: 'October 20, 2026',
      readTime: '4 min read',
      image: 'assets/images/beauty_blush.png',
      title: 'The blush palette that sold out in a weekend',
      summary: 'Inside the viral obsession with buildable baked pigment and the sculpted cheekbone renaissance.',
      content: `
        <p>Within forty-eight hours of hitting shelves, the celestial three-tier baked blush palette was completely sold out worldwide. Combining micro-milled shimmer with buildable velvet pigments, beauty lovers have hailed it as the definitive complexion product of the year.</p>
        <p class="reader-pullquote">"A hybrid formula that blurs skin texture while delivering a lit-from-within flush without any heavy powder residue."</p>
        <p>Here is how top celebrity makeup artists are utilizing draped blush techniques to sculpt cheekbones and create a youthful, dewy radiance.</p>
      `
    },
    'glass-skin': {
      category: 'Skincare',
      author: 'Kenji Sato',
      date: 'October 19, 2026',
      readTime: '5 min read',
      image: 'assets/images/beauty_skincare.png',
      title: 'Glass skin, minus the ten-step routine',
      summary: 'Streamlined barrier-repair cushions and multi-benefit ceramides deliver a dewy finish without clutter.',
      content: `
        <p>The myth that achieving radiant 'glass skin' requires an exhausting ten-step nightly commitment has officially been debunked. The new wave of K-Beauty focuses on concentrated biome-strengthening formulations and multi-benefit tone cushions.</p>
        <p class="reader-pullquote">"Skin health over product hoarding. Modern hydration is all about lightweight biocompatible ingredients."</p>
        <p>Discover the 3 essential steps recommended by dermatologists to achieve a mirror-like glow with zero grease.</p>
      `
    },
    'arts-car': {
      category: 'Design',
      author: 'Julian Vance',
      date: 'October 18, 2026',
      readTime: '6 min read',
      image: 'assets/images/arts_car.png',
      title: 'A concept car that looks like a sculpture',
      summary: 'Unveiled in Milan, the RDSTR prototype strips away visual noise to showcase pure aerodynamic minimalism.',
      content: `
        <p>Unveiled in a subterranean Milanese gallery under single-source theatrical lighting, the RDSTR concept vehicle looks less like a machine and more like a monolith carved by Brâncuși. Its seamless rear light strip and dark carbon canopy represent automotive design stripped of unnecessary clutter.</p>
        <p class="reader-pullquote">"Speed expressed through stillness. True luxury in design is having the courage to remove lines, not add them."</p>
        <p>We speak with the lead aesthetician behind the hyper-clean rear diffusers and sustainable recycled interior materials.</p>
      `
    },
    'arts-flowers': {
      category: 'Art',
      author: 'Clara Oswald',
      date: 'October 17, 2026',
      readTime: '5 min read',
      image: 'assets/images/arts_flowers.png',
      title: 'Walk through a digital meadow in full bloom',
      summary: 'Reactive generative florals respond to visitor movement in an immersive sensory London landmark.',
      content: `
        <p>Stepping into the new exhibition in London's Southbank feels like stepping through a digital looking glass. Millions of rendered cornflowers, wild poppies, and lavender blooms respond dynamically to visitor footsteps and body heat.</p>
        <p class="reader-pullquote">"Technology doesn't have to alienate us from nature—it can amplify our wonder for it."</p>
        <p>Exploring how generative AI and reactive projection mapping are opening unprecedented doors for multi-sensory storytelling.</p>
      `
    },
    'shopping-streetwear': {
      category: 'Streetwear',
      author: 'Marcus Reid',
      date: 'October 16, 2026',
      readTime: '4 min read',
      image: 'assets/images/shopping_streetwear.png',
      title: 'Green tracksuits and chrome sneakers, head to toe',
      summary: 'Elevated athletic tailoring meets space-age metallic footwear across modern capital cities.',
      content: `
        <p>From Berlin cafe terraces to Shoreditch boutiques, the prevailing street silhouette is an elevated throwback: emerald and moss velour tracksuits paired with sharp silver metallic kicks. It is comfortable, punchy, and instantly photogenic.</p>
        <p class="reader-pullquote">"The sweet spot between 1970s track aesthetics and Y2K space-age metallics."</p>
        <p>Browse our curated shopping guide featuring 8 indie brands nailing the retro-lux aesthetic right now.</p>
      `
    },
    'shopping-sneakers': {
      category: 'Sneakers',
      author: 'Chloe Dupont',
      date: 'October 15, 2026',
      readTime: '4 min read',
      image: 'assets/images/shopping_sneakers.png',
      title: 'The earth-tone running shoes everyone wants',
      summary: 'Forest green, sage suede, and charcoal New Balance 992s define this season\'s collector wish-list.',
      content: `
        <p>Sneaker culture has graduated from garish neon color-blocking to richly textured earth tones. The classic 992 silhouette in deep forest green and charcoal suede has become the ultimate chameleon shoe—equally comfortable under tailored trousers or weekend denim.</p>
        <p class="reader-pullquote">"Understated craftsmanship always outlasts ephemeral hype."</p>
        <p>Here are the verified stockists and drop dates for the most coveted footwear releases of the month.</p>
      `
    }
  };

  // State
  let bookmarks = JSON.parse(localStorage.getItem('h21_vogue_bookmarks') || '[]');
  let currentArticleId = null;

  // DOM references
  const searchToggleBtn = document.getElementById('search-toggle-btn');
  const searchBarWrap = document.getElementById('search-bar-wrap');
  const globalSearch = document.getElementById('global-search');
  const bookmarkBtn = document.getElementById('bookmark-btn');
  const bookmarkCount = document.getElementById('bookmark-count');

  const readerModal = document.getElementById('reader-modal');
  const modalClose = document.getElementById('modal-close');
  const modalCategory = document.getElementById('modal-category');
  const modalHeadline = document.getElementById('modal-headline');
  const modalByline = document.getElementById('modal-byline');
  const modalImage = document.getElementById('modal-image');
  const modalBody = document.getElementById('modal-body');
  const modalBookmark = document.getElementById('modal-bookmark');
  const modalShare = document.getElementById('modal-share');

  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterEmail = document.getElementById('newsletter-email');
  const toast = document.getElementById('vogue-toast');

  const allCards = document.querySelectorAll('.story-card[data-article-id]');

  // Initialize
  updateBookmarkCount();

  // --------------------------------------------------------------------------
  // Global Search Dropdown & Filtering
  // --------------------------------------------------------------------------
  searchToggleBtn?.addEventListener('click', () => {
    searchBarWrap.classList.toggle('open');
    if (searchBarWrap.classList.contains('open')) {
      globalSearch.focus();
    } else {
      globalSearch.value = '';
      resetAllFilters();
    }
  });

  globalSearch?.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();

    allCards.forEach((card) => {
      const title = card.querySelector('.card-title')?.textContent.toLowerCase() || '';
      const kicker = card.querySelector('.card-kicker')?.textContent.toLowerCase() || '';
      const dek = card.querySelector('.card-dek')?.textContent.toLowerCase() || '';

      const match = !q || title.includes(q) || kicker.includes(q) || dek.includes(q);
      card.style.display = match ? 'flex' : 'none';
    });

    ['fashion', 'beauty', 'arts', 'shopping'].forEach(checkCategoryEmpty);
  });

  // Section Specific Searches
  const sectionConfigs = [
    { inputId: 'search-fashion', sectionId: 'fashion-section', emptyId: 'empty-fashion' },
    { inputId: 'search-beauty', sectionId: 'beauty-section', emptyId: 'empty-beauty' },
    { inputId: 'search-arts', sectionId: 'arts-section', emptyId: 'empty-arts' },
    { inputId: 'search-shopping', sectionId: 'shopping-section', emptyId: 'empty-shopping' }
  ];

  sectionConfigs.forEach(({ inputId, sectionId, emptyId }) => {
    const input = document.getElementById(inputId);
    const section = document.getElementById(sectionId);
    const empty = document.getElementById(emptyId);

    if (!input || !section) return;

    input.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      const cards = section.querySelectorAll('.story-card');
      let visible = 0;

      cards.forEach((card) => {
        const title = card.querySelector('.card-title')?.textContent.toLowerCase() || '';
        const kicker = card.querySelector('.card-kicker')?.textContent.toLowerCase() || '';
        const isMatch = !q || title.includes(q) || kicker.includes(q);

        card.style.display = isMatch ? 'flex' : 'none';
        if (isMatch) visible++;
      });

      if (empty) {
        empty.classList.toggle('active', visible === 0);
      }
    });
  });

  function checkCategoryEmpty(categoryKey) {
    const section = document.getElementById(`${categoryKey}-section`);
    const empty = document.getElementById(`empty-${categoryKey}`);
    if (!section || !empty) return;

    const visibleCards = Array.from(section.querySelectorAll('.story-card')).filter(
      (c) => c.style.display !== 'none'
    );
    empty.classList.toggle('active', visibleCards.length === 0);
  }

  function resetAllFilters() {
    allCards.forEach((c) => (c.style.display = 'flex'));
    document.querySelectorAll('.empty-state').forEach((e) => e.classList.remove('active'));
    sectionConfigs.forEach(({ inputId }) => {
      const el = document.getElementById(inputId);
      if (el) el.value = '';
    });
  }

  document.querySelectorAll('.empty-reset-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const secKey = btn.dataset.section;
      const input = document.getElementById(`search-${secKey}`);
      if (input) {
        input.value = '';
        input.dispatchEvent(new Event('input'));
      }
      if (globalSearch && globalSearch.value) {
        globalSearch.value = '';
        globalSearch.dispatchEvent(new Event('input'));
      }
    });
  });

  // --------------------------------------------------------------------------
  // Vogue-Style Slide-Out Reader
  // --------------------------------------------------------------------------
  allCards.forEach((card) => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const id = card.dataset.articleId;
      openArticle(id);
    });
  });

  function openArticle(id) {
    const art = articles[id];
    if (!art) return;

    currentArticleId = id;
    modalCategory.textContent = art.category;
    modalHeadline.textContent = art.title;
    modalByline.innerHTML = `By <strong>${art.author}</strong> • ${art.date} • ${art.readTime}`;
    modalImage.src = art.image;
    modalImage.alt = art.title;
    modalBody.innerHTML = art.content;

    updateModalBookmarkStatus(id);
    readerModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeArticle() {
    readerModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  modalClose?.addEventListener('click', closeArticle);
  readerModal?.addEventListener('click', (e) => {
    if (e.target === readerModal) closeArticle();
  });

  // --------------------------------------------------------------------------
  // Bookmarking / Reading List
  // --------------------------------------------------------------------------
  modalBookmark?.addEventListener('click', () => {
    if (!currentArticleId) return;

    const idx = bookmarks.indexOf(currentArticleId);
    if (idx === -1) {
      bookmarks.push(currentArticleId);
      showVogueToast('Story saved to reading list');
    } else {
      bookmarks.splice(idx, 1);
      showVogueToast('Story removed from reading list');
    }

    localStorage.setItem('h21_vogue_bookmarks', JSON.stringify(bookmarks));
    updateBookmarkCount();
    updateModalBookmarkStatus(currentArticleId);
  });

  function updateModalBookmarkStatus(id) {
    if (!modalBookmark) return;
    const isSaved = bookmarks.includes(id);
    modalBookmark.innerHTML = isSaved
      ? `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>`
      : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>`;
  }

  function updateBookmarkCount() {
    if (bookmarkCount) {
      bookmarkCount.textContent = bookmarks.length;
    }
  }

  bookmarkBtn?.addEventListener('click', () => {
    if (bookmarks.length === 0) {
      showVogueToast('Your reading list is empty. Click the bookmark icon inside any story.');
      return;
    }

    allCards.forEach((card) => {
      const id = card.dataset.articleId;
      card.style.display = bookmarks.includes(id) ? 'flex' : 'none';
    });

    showVogueToast(`Displaying ${bookmarks.length} saved stories.`);
  });

  // --------------------------------------------------------------------------
  // Share
  // --------------------------------------------------------------------------
  modalShare?.addEventListener('click', async () => {
    const art = articles[currentArticleId];
    if (navigator.share) {
      try {
        await navigator.share({
          title: art.title,
          text: art.summary,
          url: window.location.href
        });
      } catch (err) {}
    } else {
      await navigator.clipboard.writeText(window.location.href);
      showVogueToast('Story URL copied to clipboard');
    }
  });

  // --------------------------------------------------------------------------
  // Newsletter Form
  // --------------------------------------------------------------------------
  newsletterForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterEmail.value.trim();

    if (!email || !email.includes('@')) {
      showVogueToast('Please provide a valid email address');
      return;
    }

    newsletterEmail.value = '';
    showVogueToast('Thank you for subscribing to Hover21 Magazine.');
  });

  // --------------------------------------------------------------------------
  // Toast Helper
  // --------------------------------------------------------------------------
  let toastTimer = null;
  function showVogueToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3600);
  }

  // --------------------------------------------------------------------------
  // Keyboard Escape
  // --------------------------------------------------------------------------
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (readerModal.classList.contains('open')) closeArticle();
      if (searchBarWrap.classList.contains('open')) {
        searchBarWrap.classList.remove('open');
        globalSearch.value = '';
        resetAllFilters();
      }
    }
  });
});
