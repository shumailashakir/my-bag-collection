import React from 'react'

const About = () => {
    return (
        <div>
            <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url(profile.webp)" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better text contrast */}
                <div className="relative max-w-7xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 text-center text-white">
                    {/* Heading */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-orange-700 animate-fade-in">
                        About Us
                    </h2>

                    {/* Paragraphs */}
                    <p className="text-base sm:text-lg md:text-xl text-gray-200 font-semibold mb-4 sm:mb-6 max-w-3xl mx-auto">
                        Welcome to Bags Collection&apos;, your ultimate destination for premium handbags. We believe in providing our customers with the finest quality bags that combine elegance, functionality, and style. Whether you&apos;re looking for a chic handbag for everyday use or a statement piece for a special occasion, we offer a wide range of designs to suit every taste.
                    </p>

                    <p className="text-base sm:text-lg md:text-xl text-gray-200 font-semibold mb-4 sm:mb-6 max-w-3xl mx-auto">
                        At Bags Collection, we are passionate about craftsmanship and attention to detail. Each bag is carefully designed and made with the highest quality materials to ensure durability, comfort, and fashion-forward looks. From classic styles to modern designs, our collections are perfect for any occasion.
                    </p>

                    <p className="text-base sm:text-lg md:text-xl text-gray-200 font-semibold mb-4 sm:mb-6 max-w-3xl mx-auto">
                        We strive to empower individuals by offering stylish accessories that enhance their everyday lives. Our mission is to help you express your unique personality and confidence with a handbag that fits your lifestyle.
                    </p>

                    <p className="text-base sm:text-lg md:text-xl text-gray-200 font-semibold mb-4 sm:mb-6 max-w-3xl mx-auto">
                        Explore our collections and find your perfect handbag today. We promise that every piece will not only be a fashion statement but also a trusted companion for years to come.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default About
