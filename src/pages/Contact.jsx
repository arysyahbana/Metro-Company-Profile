import Footer from "../components/layouts/Footer"
import Nav from "../components/layouts/Navbar"
import bg from "../assets/bg.png";
import phone from "../../public/images/phone.svg";
import email from "../../public/images/email.svg";
import map from "../../public/images/map.svg";
import ig from "../../public/images/ig.svg";
import tiktok from "../../public/images/tiktok.svg";
import {motion} from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

const Contact = () => {
    const Contacts = [
        {
            img: phone,
            title: "Phone",
            desc: "+62 822-8960-8096",
        },
        {
            img: email,
            title: "Email",
            desc: "metroindo.software@gmail.com",
        },
        {
            img: map,
            title: "Address",
            desc: "Jl. Seberang Padang Utara I, Kota Padang",
        },
        {
            img: ig,
            title: "Instagram",
            desc: "@metrosoftware",
        },
        {
            img: tiktok,
            title: "Tik Tok",
            desc: "@metrosoftware",
        },
    ]
    return (
        <div>
            {/* Hero */}
            <div className="banner">
                <div className="pb-5"></div>
                <Nav />
                {/* Hero */}
                <div className="container mx-auto mt-52 px-5">
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <div className="flex w-full max-w-[300px]">
                            <motion.div className="pt-1 bg-[#A149FA] w-full max-w-[100px] my-3" transition={{duration: 1, delay: 1, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} viewport={{once: false, amount: 0.5}}></motion.div>
                        </div>
                        <motion.p className="text-5xl font-bold text-slate-700" transition={{duration: 1, delay: 0.5, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0.5 }} viewport={{once: false, amount: 0.5}}>Contact Us</motion.p>
                        <div className="flex justify-end w-full max-w-[300px]">
                            <motion.div className="pt-1 bg-[#23F9B5] w-full max-w-[120px] my-3" transition={{duration: 1, delay: 1.2, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} viewport={{once: false, amount: 0.5}}></motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Location */}
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <p className="font-bold text-3xl text-[#45474B]">Our Location</p>
                    <motion.div className="pt-1 bg-[#A149FA] max-w-[100px] mx-auto my-3" transition={{duration: 1, delay: 1, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0 }} viewport={{once: false, amount: 0.5}}></motion.div>
                </div>
                <motion.div transition={{duration: 1, delay: 0.5, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} viewport={{once: true, amount: 0.5}}>
                    <div className="w-full aspect-w-16 aspect-h-9 md:h-[500px]">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.272884225966!2d100.37868577585641!3d-0.9474099990434341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd4b94362a6f767%3A0x556ec93e4b0d0f26!2sSoftware%20House%20Padang%20%7C%20PT.%20Metro%20Indonesian%20Software%20%7C%20Jasa%20pembuatan%20website%2C%20company%20profile%2C%20dan%20aplikasi%20mobile.!5e0!3m2!1sid!2sid!4v1729334623344!5m2!1sid!2sid" 
                            className="w-full h-full"
                            style={{ border: 0 }} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </motion.div>
            </div>

            {/* Contact */}
            <div className="container mx-auto mt-32 max-w-[68%]">
                <motion.div className="relative flex justify-center" transition={{duration: 1, delay: 0.5, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} viewport={{once: true, amount: 0.5}}>
                    <img src={bg} alt="" className="object-fit-cover w-full h-[200px] rounded-3xl shadow-lg" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-3/5 px-12">
                        <div className="hidden xl:flex justify-between items-center py-4">
                            {Contacts.map((data, i) => {
                                return (
                                    <div key={i} className="flex flex-col items-center">
                                        <img src={data.img} alt="" className="h-10" />
                                        <p className="text-[#23F9B5] text-xl mt-1">{data.title}</p>
                                        <p className="text-white text-md">{data.desc}</p>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="block mt-2 xl:hidden">
                            <Swiper spaceBetween={50} slidesPerView={1} modules={[Autoplay]} autoplay={{delay: 1000}}>
                                {Contacts.map((data, i) => (
                                    <SwiperSlide key={data.id}>
                                        <div key={i} className="flex flex-col items-center">
                                            <img src={data.img} alt="" className="h-10" />
                                            <p className="text-[#23F9B5] text-xl mt-1 text-center">{data.title}</p>
                                            <p className="text-white text-md text-center">{data.desc}</p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}
export default Contact