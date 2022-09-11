const WORDS = {
  AMBIANCE: [
    "2d",
    "3d",
    "8-bit",
    "agfacolor",
    "artificial lighting",
    "backlit",
    "black-and-white",
    "blue-toned",
    "bright",
    "cinecolar",
    "colorful",
    "cool colors",
    "crepuscular",
    "dark",
    "desaturated",
    "frontlight",
    "gloomy",
    "golden-hour",
    "green-toned",
    "hard lighting",
    "high contrast",
    "high-res",
    "infrared",
    "inverted colors",
    "kinemacolor",
    "kodachrome",
    "light",
    "low contrast",
    "low-res",
    "monochrome",
    "moody",
    "natural lighting",
    "orange-toned",
    "pixelated",
    "purple-toned",
    "rainbow",
    "red-toned",
    "rim lights",
    "scepia-toned",
    "scepia",
    "soft lighting",
    "spotlight",
    "strobe",
    "technicolor",
    "warm colors",
    "warm light",
    "washed-out",
    "yellow-toned",
  ],
  MATERIAL: [
    "bronze",
    "marble",
    "copper",
    "paper",
    "canvas",
    "watercolor paper",
    "recycled paper",
    "concrete",
    "granite",
    "paper-mache",
    "felt",
    "stone",
    "wood",
    "cherry-wood",
    "mural",
    "magazine",
    "newspaper",
    "book",
    "sticker",
    "cardboard",
    "cardstock",
    "construction paper",
    "parchment",
    "manila",
    "envelope",
    "graph paper",
    "wraping paper"
  ],
  MEDIUMS: [
    "35mm",
    "3d art",
    "3d model",
    "anatomical drawing",
    "anime",
    "aquatint",
    "block print",
    "blueprint",
    "blurry",
    "bokey",
    "calligraphy",
    "canvas",
    "cartoon",
    "carving",
    "charcoal drawing",
    "charcoal",
    "cinematic",
    "circuit art",
    "collagraph",
    "colored pencil drawing",
    "colored pencil",
    "comic",
    "cross-hatch",
    "daguerrotype",
    "design",
    "digital art",
    "digital painting",
    "doodle",
    "doodle",
    "dot art",
    "drawing",
    "dslr",
    "engraving",
    "engraving",
    "etching",
    "film grain",
    "filmic",
    "fine-art",
    "fisheye",
    "fountain pen",
    "glass mosaic",
    "goache",
    "graffiti",
    "graphic-novel",
    "graphite drawing",
    "graphite",
    "high-speed photo",
    "ice sculpture",
    "ice-carving",
    "illustration",
    "infrared",
    "ink drawing",
    "intaglio",
    "lens flare",
    "light art",
    "line art",
    "linocut",
    "lithogrpahy",
    "lomo",
    "long exposure",
    "manga",
    "marker",
    "maro photograph",
    "micromosaic",
    "monotype",
    "mosaic",
    "neon",
    "night vision",
    "paint",
    "painting",
    "panorama",
    "paper model",
    "paper-mache",
    "papercut",
    "patent drawing",
    "pencil drawing",
    "photo mosaic",
    "photo",
    "photograph",
    "photography",
    "pinhole photgraph",
    "pixel art",
    "polaroid",
    "polyhedral",
    "portrait",
    "poster",
    "pottery",
    "print",
    "puppet",
    "pyrography",
    "pyrogravure",
    "relief-carving",
    "scroll",
    "sculpture",
    "silkscreen",
    "sketch",
    "splatter paint",
    "spray paint",
    "stipple",
    "string-art",
    "telephoto",
    "tilt-shift",
    "ultra-wide angle",
    "velvia",
    "vignette",
    "vintage photograaphy",
    "water-color",
    "watercolor",
    "whiteboard",
    "wide angle photo",
    "woodblock",
    "woodcut",
    "woodprint",
    "x-ray",
    "xray",
  ],
  SCHOOL: [
    "abstract expressionist",
    "abstract illusionist",
    "abstract",
    "academic",
    "action painting",
    "aestheticist",
    "afrofuturist",
    "altermodern",
    "american barbizon school",
    "american impressionist",
    "american realist",
    "american scene painting",
    "analytical",
    "antipodeans",
    "arabesque",
    "arbeitsrat für kunst",
    "art & language",
    "art brut",
    "art deco",
    "art informel",
    "art nouveau",
    "art photography",
    "arte povera",
    "arts and crafts movement",
    "ascii",
    "ashcan school",
    "assemblage",
    "australian tonalist",
    "auto-destructive",
    "barbizon school",
    "baroque",
    "bauhaus",
    "berlin secession",
    "blacks movement",
    "brutalist",
    "classical realist",
    "classical",
    "cloisonnist",
    "cobra",
    "color field",
    "computer",
    "conceptual",
    "concrete",
    "constructivist",
    "context",
    "crystal cubist",
    "cubist",
    "cubo-futurist",
    "cynical realist",
    "dada",
    "dansaekhwa",
    "danube school",
    "dau-al-set",
    "de stijl (also known as neoplasticist)",
    "deconstructivist",
    "digital",
    "ecological",
    "environmental",
    "excessivist",
    "expressionist",
    "fantastic realist",
    "fauvist",
    "feminist",
    "figuration libre",
    "figurative",
    "fine",
    "fluxus",
    "folk",
    "funk",
    "futurist",
    "geometric abstract",
    "glitch",
    "gothic",
    "graffiti/street",
    "gutai group",
    "happening",
    "harlem renaissance",
    "heidelberg school",
    "hudson river school",
    "hurufiyya",
    "hypermodernist",
    "hyperrealist",
    "impressionist",
    "incoherents",
    "institutional critique",
    "interactive",
    "international gothic",
    "international typographic style",
    "kinetic pointillist",
    "kinetic",
    "kitsch movement",
    "land",
    "les automatistes",
    "les nabis",
    "letterist",
    "light and space",
    "lowbrow",
    "lyco",
    "lyrical abstraction",
    "magic realist",
    "mail",
    "mannerist",
    "massurrealist",
    "maximalist",
    "metaphysical painting",
    "mingei",
    "minimalist",
    "modern european ink painting",
    "modernist",
    "modular constructivist",
    "naive",
    "neo-dada",
    "neo-expressionist",
    "neo-fauvist",
    "neo-figurative",
    "neo-primitivist",
    "neo-romanticist",
    "neoclassicist",
    "neogeo (art)",
    "neoist",
    "net",
    "new objectivity",
    "new sculpture",
    "northwest school",
    "nuclear",
    "objective abstraction",
    "op",
    "orphist",
    "panfuturist",
    "paris school",
    "photorealist",
    "pixel",
    "plasticien",
    "plein air",
    "pointillist",
    "pop",
    "post-impressionist",
    "postminimalist",
    "pre-raphaelitist",
    "precisionist",
    "primitivist",
    "private press",
    "process",
    "psychedelic",
    "purist",
    "qajar",
    "quito school",
    "rasquache",
    "rayonist",
    "realist",
    "regionalist",
    "remodernist",
    "renaissance",
    "retrofuturist",
    "rococo",
    "romanesque",
    "romanticist",
    "samikshavad",
    "serial",
    "shin hanga",
    "shock",
    "socialist realist",
    "sōsaku hanga",
    "sots",
    "space",
    "street",
    "stuckist",
    "sumatraist",
    "superflat",
    "suprematist",
    "surrealist",
    "symbolist",
    "synchromist",
    "synthetist",
    "tachiste ",
    "temporary",
    "tonalist",
    "toyist",
    "transgressive",
    "ukiyo-e",
    "underground comix",
    "unilalianist",
    "vancouver school",
    "vanitas",
    "verdadist",
    "video",
    "viennese actionist",
    "visual",
    "vorticist",
  ],
  ARTISTS: [
    "botticeli",
    "cezanne",
    "chihully",
    "chuck close",
    "da vinci",
    "dali",
    "degas",
    "donatello",
    "edvard munch",
    "eyck",
    "gaugain",
    "georgia o'keef",
    "goya",
    "grant wood",
    "hiroshige",
    "hokusai",
    "j. m. w. turner",
    "kahlo",
    "klimt",
    "magritte",
    "manet",
    "matisse",
    "michelangelo",
    "miro",
    "mondrian",
    "monet",
    "picasso",
    "raphael",
    "rembrandt",
    "seurat",
    "steinen",
    "van gogh",
    "vermeer",
  ]
};

export default WORDS;