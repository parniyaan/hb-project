const cars = [
    {
        name: "KMC",
        src: '/images/products-Images/KMC.jpg',
        description: "خودروی توانمند و مناسب برای استفاده در شرایط سخت",
        information: "KMC یک خودروی قوی و مقاوم است که طراحی آن برای چالش‌های سخت بهینه شده است. ما با تولید لوازم جانبی آفرود با کیفیت بالا، تجربه‌ای ایمن و مطمئن برای شما به ارمغان می‌آوریم. با استفاده از مواد باکیفیت، اطمینان داریم که سفرهای شما با لوازم ما بی‌نقص خواهد بود.",
        slug: "kmc",
        images: [
            "/images/kmc/1-1.jpg",
            "/images/kmc/1-2.jpg",
            "/images/kmc/1-3.jpg",
            "/images/kmc/1-4.jpg",
        ],
    },
    {
        name: "Toyota Hilux",
        src: "/images/products-Images/Toyota Hilux.jpg",
        description: "قدرت و دوام بالا، مناسب برای آفرود و کارهای سنگین",
        information: "تویوتا هایلوکس با قدرت و دوام بالا، گزینه‌ای ایده‌آل برای آفرود و کارهای سنگین است. لوازم جانبی آفرود ما به گونه‌ای طراحی شده‌اند که امنیت و راحتی شما را در سفرهای سخت تضمین کنند. ما از بهترین مواد اولیه برای تولید لوازم خود استفاده می‌کنیم تا تجربه‌ای عالی را فراهم کنیم.",
        slug: "toyota-hilux",
        images: [
            "/images/kmc/1-1.jpg",
            "/images/kmc/1-2.jpg",
            "/images/kmc/1-3.jpg",
            "/images/kmc/1-4.jpg",
        ],
    },
    {
        name: "Wingle",
        src: "/images/products-Images/Wingle.jpg",
        description: "کیفیت ساخت بالا و مصرف سوخت مناسب، انتخاب اقتصادی",
        information: "وینگل با طراحی اقتصادی و کیفیت ساخت بالا، بهترین گزینه برای مصرف‌کنندگان هوشمند است. ما با تولید لوازم جانبی آفرود با کیفیت، اطمینان حاصل می‌کنیم که سفرهای شما ایمن و بهینه باشد. تجربه‌ای بی‌نظیر از کیفیت و عملکرد را با محصولات ما تجربه کنید.",
        slug: "wingle",
        images: [
            "/images/kmc/1-1.jpg",
            "/images/kmc/1-2.jpg",
            "/images/kmc/1-3.jpg",
            "/images/kmc/1-4.jpg",
        ],
    },
    {
        name: "Nissan Pickup",
        src: "/images/products-Images/Nissan Pickup.jpg",
        description: "عملکرد قوی و دوام بالا، گزینه‌ای محبوب در خودروهای تجاری",
        information: "پیکاپ نیسان با عملکرد قوی و دوام بالا، یک گزینه محبوب در خودروهای تجاری است. با لوازم جانبی آفرود ما، می‌توانید از دوام و قابلیت اطمینان بیشتری در سفرهای خود بهره‌مند شوید. ما از مواد با کیفیت برای تولید محصولات خود استفاده می‌کنیم تا شما را در مسیرهای دشوار همراهی کنیم.",
        slug: "nissan-pickup",
        images: [
            "/images/kmc/1-1.jpg",
            "/images/kmc/1-2.jpg",
            "/images/kmc/1-3.jpg",
            "/images/kmc/1-4.jpg",
        ],
    },
    {
        name: "Capra",
        src: "/images/products-Images/Capra.jpg",
        description: "نسخه بهبودیافته با امکانات بیشتر و مناسب برای مسیرهای سخت و آفرود",
        information: "کاپرا یک نسخه بهبودیافته است که برای مسیرهای چالشی طراحی شده است. با لوازم جانبی آفرود با کیفیت ما، می‌توانید به راحتی از چالش‌های طبیعی عبور کنید. ما به استفاده از مواد باکیفیت متعهد هستیم تا سفرهای شما را ایمن و لذت‌بخش کنیم.",
        slug: "capra",
        images: [
            "/images/capra/capra1.jpg",
            "/images/capra/capra2.jpg",
            "/images/capra/capra3.jpg",
        ],
    },
    {
        name: "Amico Asena",
        src: "/images/products-Images/Amico Asena.jpg",
        description: "دو دیفرانسیل با طراحی مدرن و امکانات رفاهی بالا",
        information: "آمیگو آسنای با طراحی مدرن، گزینه‌ای عالی برای آفرود است. لوازم جانبی ما به گونه‌ای طراحی شده‌اند که راحتی و ایمنی را برای شما به ارمغان بیاورند. با استفاده از بهترین مواد، می‌توانید به محصولات ما اعتماد کنید.",
        slug: "amico-asena",
        images: [
            "/images/kmc/1-1.jpg",
            "/images/kmc/1-2.jpg",
            "/images/kmc/1-3.jpg",
            "/images/kmc/1-4.jpg",
        ],
    },
    {
        name: "Kalut",
        src: "/images/products-Images/Kalut.jpg",
        description: "پیکاپ اقتصادی مناسب برای استفاده تجاری و باربری",
        information: "کالات یک پیکاپ اقتصادی است که برای استفاده تجاری بهینه شده است. با لوازم جانبی آفرود ما، می‌توانید از قابلیت‌های بیشتری در سفرهای خود بهره‌مند شوید. ما از مواد باکیفیت استفاده می‌کنیم تا به شما اطمینان خاطر بدهیم.",
        slug: "kalut",
        images: [
            "/images/kmc/1-1.jpg",
            "/images/kmc/1-2.jpg",
            "/images/kmc/1-3.jpg",
            "/images/kmc/1-4.jpg",
        ],
    },
    {
        name: "Foton",
        src: "/images/products-Images/Foton.jpg",
        description: "موتور قوی و قابلیت حمل بار زیاد، مناسب برای مصارف سنگین",
        information: "فوتون با موتور قوی و قابلیت حمل بار زیاد، یک انتخاب مناسب برای مصارف سنگین است. لوازم جانبی ما برای عملکرد بهینه طراحی شده‌اند و ایمنی سفرهای شما را تضمین می‌کنند. از کیفیت بالای محصولات ما لذت ببرید.",
        slug: "foton",
        images: [
            '/images/foton/4-1.jpg',
            '/images/foton/4-2.jpg',
        ]
    },
    {
        name: "Isuzu",
        src: "/images/products-Images/Isuzu.jpg",
        description: "ساختار محکم با عملکرد بالا برای باربری‌های سنگین و شرایط سخت",
        information: "ایسوزو با ساختاری محکم و عملکرد بالا، بهترین انتخاب برای باربری‌های سنگین است. با لوازم جانبی آفرود ما، شما می‌توانید در سخت‌ترین شرایط به راحتی سفر کنید. کیفیت بالای مواد به شما اطمینان می‌دهد.",
        slug: "isuzu",
        images: [
            "/images/kmc/1-1.jpg",
            "/images/kmc/1-2.jpg",
            "/images/kmc/1-3.jpg",
            "/images/kmc/1-4.jpg",
        ],
    },
    {
        name: "Pride Vanet",
        src: "/images/products-Images/Pride vanet.jpg",
        description: "خودروی اقتصادی و مناسب برای حمل و نقل بار",
        information: "پراید ونت یک خودروی اقتصادی است که به طور خاص برای حمل و نقل بار طراحی شده است. لوازم جانبی آفرود ما به شما کمک می‌کند تا در باربری‌های خود ایمنی و کارایی بیشتری داشته باشید. ما از مواد باکیفیت استفاده می‌کنیم تا سفرهای شما را آسان‌تر کنیم.",
        slug: "pride-vanet",
        images: [
            "/images/kmc/1-1.jpg",
            "/images/kmc/1-2.jpg",
            "/images/kmc/1-3.jpg",
            "/images/kmc/1-4.jpg",
        ],
    },
    {
        name: "Arisan",
        src: "/images/products-Images/Arisan.jpg",
        description: "وانت سبک شهری با طراحی مناسب برای کارهای روزمره",
        information: "آریسان با طراحی مناسب برای کارهای روزمره، گزینه‌ای عالی برای حمل و نقل بارهای سبک در شهر است. لوازم جانبی آفرود ما به شما این امکان را می‌دهد که از کارایی و ایمنی بیشتری در مسیرهای شهری و جاده‌ای برخوردار شوید. ما از مواد باکیفیت در تولید محصولات خود استفاده می‌کنیم.",
        slug: "arisan",
        images: [
            "/images/kmc/1-1.jpg",
            "/images/kmc/1-2.jpg",
            "/images/kmc/1-3.jpg",
            "/images/kmc/1-4.jpg",
        ],
    }
];

export default cars;