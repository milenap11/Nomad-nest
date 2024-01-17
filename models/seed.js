const destinations = [
    {
    name: 'Lisbon, Portugal',
    photo: 'https://nomadcapitalist.com/wp-content/uploads/Best-Cities-For-Digital-Nomads-In-Europe.png',
    description: 'Quite affordable by European standards, Lisbon is a beautiful city with vibrant culture and rich history. The city is as digital nomad friendly as it gets: you’ll find coworking spaces in almost every neighborhood, the internet speed is excellent, and all the cool cafes are filled with remote workers working on their laptops.',
    averageCost: '$1,200',
    visa: 'Digital nomad visa or D7 visa', 
    isFeatured: true,
    },
    {
    name: 'Prague, Czech Republic',
    photo: 'https://nomadcapitalist.com/wp-content/uploads/Best-Cities-For-Digital-Nomads-In-EuropePrague-Czech-Republic.png',
    description: 'The best thing about Prague is its location. The city and the country are quite international, thanks to its popularity with tourists and its location in the heart of Europe. The city is as charming as it gets with its vibrant culture, ancient architecture, fantastic entertainment scene, and delicious food. You’ll find plenty of cool cafes, and coworking spaces in Prague, filled with one of the most diverse expat communities you’ll ever encounter.',
    averageCost: '$1,000',
    visa: 'Czech Republic visa for freelancers', 
    isFeatured: false,
    },
    {
    name: 'Tulum, Mexico',
    photo: 'https://nomadcapitalist.com/wp-content/uploads/Digital-Nomad-Cities-In-Central-And-South-America-Tulum-Mexico.png',
    description: 'Thanks to its rich culture, exotic cuisine, vibrant entertainment scene, excellent nightlife, and stunning views, digital nomads have always flocked to the country. Tulum is a major city in Mexico known for its beaches, stunning lagoons, Mayan ruins, and diverse community. There is no shortage of cafes, co-working spaces, and resorts for you to work while enjoying the best of views.',
    averageCost: '$1,900',
    visa: 'Temporary resident visa',  
    isFeatured: true,
    },
    {
    name: 'San Jose, Costa Rica',
    photo: 'https://nomadcapitalist.com/wp-content/uploads/Digital-Nomad-Cities-In-Central-And-South-America-San-Jose-Costa-Rica.png',
    description: 'San Jose is the capital and largest city of Costa Rica, a country known for its rich biodiversity, lush green forests, volcanoes, stunning beaches, and the pura vida lifestyle.The city is a central transportation hub and the political and economic center of the country. San Jose boasts diversity in many aspects, from lifestyle to neighborhoods. Whether you want city life or a quiet workplace, the city will provide you with plenty of options. Costa Rica has over half a million expats, thanks to its territorial tax regime, low cost of living, and natural beauty.',
    averageCost: '$1,800',
    visa: 'Digital nomad visa or tourist visa',
    isFeatured: false,  
    },
    {
    name: 'Bali, Indonesia',
    photo: 'https://nomadcapitalist.com/wp-content/uploads/Best-Cities-For-Digital-Nomads-In-Asia.png',
    description: 'Rice terraces, lush green forests, infinity pools, and more – Bali has got everything a digital nomad would want in a city. Bali is the ultimate digital nomad hotspot with beautiful coworking spaces designed to let you work in tranquillity, scenic places to explore, speedy WIFI, and one of the best digital nomad communities you’d find anywhere.',
    averageCost: '$1,600',
    visa: 'Visa-on-arrival (30 days) or B211A visa (60 days)', 
    isFeatured: false,
    },
    {
    name: 'Chiang Mai, Thailand',
    photo: 'https://nomadcapitalist.com/wp-content/uploads/Digital-Nomads-Chiang-Mai-Thailand-1.png',
    description: 'Situated in Northern Thailand, Chiang Mai is an ancient city with hundreds of temples and a beautiful mountainous landscape. Over the years, Chiang Mai has transformed from a quiet religious town to one bustling with digital nomads from all over the world looking to enjoy the city sights while working remotely. Chiang Mai has all the digital nomad essentials – cool cafes, hostels, speedy internet, delicious street food, and coworking spaces.',
    averageCost: '$1,500',
    visa: 'Thai-Long-Term-Visa (Thailand Golden Visa)',  
    isFeatured: true,  
    }
]

// Export the seed data to `models/index.js`
module.exports = destinations