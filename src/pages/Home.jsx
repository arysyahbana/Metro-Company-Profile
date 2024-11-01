import { Button, Card, CardBody, Image } from "@nextui-org/react"
import Nav from "../components/layouts/Navbar"
import Background from "../components/Elements/Background"
import {motion} from "framer-motion";
import intro from "../assets/metrointro.png";
import bg from "../assets/bg.png";
import android from "../../public/images/android.png";
import web from "../../public/images/internet.png";
import figma from "../../public/images/figma.png";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import Footer from "../components/layouts/Footer";

import {Pagination as NextUIPagination} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
    const ani = {
      hidden: { opacity: 0, scale: 0, y: 500 },
      visible: { opacity: 1, scale: 1, y:0 },
    };
    const cardVariants = {
      hidden: { opacity: 0, y: 100 },
      visible: { opacity: 1, y: 0 },
    };
    // const Clients = [
    //     {
    //         img: "/images/Clients Happy/Logo pln.png",
    //         title: "Metro Indonesia1",
    //         desc: "Metro Indonesia",
    //     },
    //     {
    //         img: "/images/Clients Happy/Logo pln.png",
    //         title: "Metro Indonesia2",
    //         desc: "Metro Indonesia",
    //     },
    //     {
    //         img: "/images/Clients Happy/Logo pln.png",
    //         title: "Metro Indonesia3",
    //         desc: "Metro Indonesia",
    //     },
    //     {
    //         img: "/images/Clients Happy/Logo pln.png",
    //         title: "Metro Indonesia4",
    //         desc: "Metro Indonesia",
    //     },
    //     {
    //         img: "/images/Clients Happy/Logo pln.png",
    //         title: "Metro Indonesia5",
    //         desc: "Metro Indonesia",
    //     },
    //     {
    //         img: "/images/Clients Happy/Logo pln.png",
    //         title: "Metro Indonesia6",
    //         desc: "Metro Indonesia",
    //     },
    //     {
    //         img: "/images/Clients Happy/Logo pln.png",
    //         title: "Metro Indonesia7",
    //         desc: "Metro Indonesia",
    //     },
    //     {
    //         img: "/images/Clients Happy/Logo pln.png",
    //         title: "Metro Indonesia8",
    //         desc: "Metro Indonesia",
    //     },
    //     {
    //         img: "/images/Clients Happy/Logo pln.png",
    //         title: "Metro Indonesia9",
    //         desc: "Metro Indonesia",
    //     },
    //     {
    //         img: "/images/Clients Happy/Logo pln.png",
    //         title: "Metro Indonesia10",
    //         desc: "Metro Indonesia",
    //     },
    //     {
    //         img: "/images/Clients Happy/Logo pln.png",
    //         title: "Metro Indonesia11",
    //         desc: "Metro Indonesia",
    //     },
    //     {
    //         img: "/images/Clients Happy/Logo pln.png",
    //         title: "Metro Indonesia12",
    //         desc: "Metro Indonesia",
    //     },
    //     {
    //         img: "/images/Clients Happy/Logo pln.png",
    //         title: "Metro Indonesia13",
    //         desc: "Metro Indonesia",
    //     },
    //     {
    //         img: "/images/Clients Happy/Logo pln.png",
    //         title: "Metro Indonesia14",
    //         desc: "Metro Indonesia",
    //     },
    //     {
    //         img: "/images/Clients Happy/Logo pln.png",
    //         title: "Metro Indonesia15",
    //         desc: "Metro Indonesia",
    //     },
    //     {
    //         img: "/images/Clients Happy/Logo pln.png",
    //         title: "Metro Indonesia16",
    //         desc: "Metro Indonesia",
    //     },
    // ];
    // const Projects = [
    //     {
    //         img: "/images/Project's Done/1.jpg",
    //         title: "Metro Indonesia1",
    //         desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Cubilia senectus .....",
    //     },
    //     {
    //         img: "/images/Project's Done/2.jpg",
    //         title: "Metro Indonesia2",
    //         desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Cubilia senectus .....",
    //     },
    //     {
    //         img: "/images/Project's Done/3.jpg",
    //         title: "Metro Indonesia3",
    //         desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Cubilia senectus .....",
    //     },
    //     {
    //         img: "/images/Project's Done/4.jpg",
    //         title: "Metro Indonesia4",
    //         desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Cubilia senectus .....",
    //     },
    //     {
    //         img: "/images/Project's Done/5.jpg",
    //         title: "Metro Indonesia5",
    //         desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Cubilia senectus .....",
    //     },
    //     {
    //         img: "/images/Project's Done/6.jpg",
    //         title: "Metro Indonesia6",
    //         desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Cubilia senectus .....",
    //     },
    // ];

    const [activeCard, setActiveCard] = useState(null); // State to track clicked card
    
    const [services, setServices] = useState([]);
    const [clients, setClients] = useState([]);
    const [projects, setProjects] = useState([]);
    const [testimonies, setTestimonies] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 8;

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };


    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const currentProjects = projects.slice(indexOfFirstItem, indexOfLastItem);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [servicesResponse, clientsResponse, projectsResponse, testimoniesResponse] = await Promise.all([
                    axios.get('https://api-compro.metrosoftware.id/api/services'),
                    axios.get('https://api-compro.metrosoftware.id/api/clients'),
                    axios.get('https://api-compro.metrosoftware.id/api/projects'),
                    axios.get('https://api-compro.metrosoftware.id/api/testimonies'),
                ]);

                setServices(servicesResponse.data.data);
                console.log(servicesResponse.data.data);

                setClients(clientsResponse.data.data);
                console.log(clientsResponse.data.data);

                setProjects(projectsResponse.data.data);
                console.log(projectsResponse.data.data);

                setTestimonies(testimoniesResponse.data.data);
                console.log(testimoniesResponse.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    const handleCardClick = (id) => {
        setActiveCard(activeCard === id ? null : id); // Toggle activeCard
    };

    const repeatedClients = [...clients, ...clients, ...clients];
    return(
        <div>
            {/* Hero */}
            <div className="banner">
                <div className="pb-5"></div>
                <Nav/>

                {/* Hero */}
                <div className="flex gap-2 container mx-auto mt-40 text-center flex-col lg:flex-row lg:mt-52 px-5 lg:text-start">
                    <div className="order-last lg:order-first lg:w-1/2 lg:mt-12 lg:ps-12">
                        <motion.p className="text-3xl lg:text-5xl font-bold text-slate-700" variants={ani} transition={{duration: 1, delay: 0.3, type: "spring"}} whileInView={"visible"} initial={"hidden"} viewport={{once: false, amount: 0.5}}>Metro Indonesian <span className="text-[#23F9B5] drop-shadow-img">Software</span></motion.p>
                        <motion.p className="my-3 text-slate-500" transition={{duration: 1, delay: 0.6, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -50 }} viewport={{once: false, amount: 0.5}}>Merupakan perusahaan jasa pembuatan website, aplikasi mobile, dan sistem informasi di Kota Padang. Kami berkomitmen menjadi perusahaan terkemuka di industri perangkat lunak dan solusi teknologi di Indonesia serta menghasilkan inovasi yang memberdayakan bisnis dan masyarakat.</motion.p>
                        <motion.div transition={{duration: 1, delay: 0.9, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -50 }} viewport={{once: false, amount: 0.5}}>
                            <Button as={Link} to={"/about"} className=" bg-[#A149FA] font-bold text-white" size="md" variant="shadow">Get Started</Button>
                        </motion.div>
                    </div>
                    <div className="order-first lg:order-last lg:w-1/2 hidden md:block">
                        <Background />
                    </div>
                </div>
            </div>

            {/* Intro */}
            <div className="container mx-auto md:mt-32 lg:mt-0 lg:px-5 overflow-hidden xl:mt-72 2xl:mt-32">
                <div className="flex gap-16 justify-center flex-col lg:flex-row">
                    <motion.div className="overflow-hidden rounded-2xl max-w-[500px] mx-auto lg:mx-0 order-last lg:order-first" transition={{duration: 1, delay: 1.3, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} viewport={{once: false, amount: 0.5}}>
                        <img src={intro} alt="" className="object-fit-cover w-full" />
                    </motion.div>
                    <div className="mx-5 text-center lg:w-1/2 lg:mx-0 lg:text-start order-first lg:order-last">
                        <motion.p className="text-2xl font-bold text-[#A149FA] mt-10" transition={{duration: 1, delay: 1.3, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -50 }} viewport={{once: false, amount: 0.5}}>Introduction</motion.p>
                        <motion.p className="font-bold text-3xl text-[#45474B]" transition={{duration: 1, delay: 1.4, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -50 }} viewport={{once: false, amount: 0.5}}>Get To Know Us!</motion.p>
                        <motion.div className="pt-1 bg-[#A149FA] w-full max-w-[100px] my-3 mx-auto lg:mx-0" transition={{duration: 1, delay: 1.8, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0 }} viewport={{once: false, amount: 0.5}}></motion.div>
                        <motion.p className="text-slate-500" transition={{duration: 1, delay: 1.9, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} viewport={{once: false, amount: 0.5}}>Metro Indonesian Software merupakan sebuah perusahaan yang berfokus pada pengembangan perangkat lunak dan solusi teknologi dengan visi untuk menjadi perusahaan terkemuka di Indonesia, menggabungkan inovasi dan keahlian dalam pengembangan perangkat lunak dengan kebanggaan atas identitas Indonesia.</motion.p>
                    </div>
                </div>
            </div>

            {/* Contact */}
            <div className="container mx-auto mt-32 max-w-[68%]">
                <motion.div className="relative flex justify-center" transition={{duration: 1, delay: 0.5, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} viewport={{once: true, amount: 0.5}}>
                    <img src={bg} alt="" className="object-fit-cover w-full h-[200px] rounded-3xl shadow-lg" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-3/5 px-12">
                        <div className="flex justify-between items-center xl:py-8 flex-col md:flex-row">
                            <div className="text-center md:w-1/2 md:text-start">
                                <p className="text-white lg:text-2xl font-thin">Let's Work Together</p>
                                <p className="text-[#23F9B5] lg:text-3xl font-semibold mt-1">Metro Indonesian Software</p>
                            </div>
                            <div className="md:w-1/2 flex justify-end mt-3 md:mt-0">
                                <Button as={Link} to="/contact" className="font-bold text-white border-[#23F9B5] hover:bg-[#23F9B5] rounded-full" size="lg" variant="bordered">Contact Us</Button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Our Service */}
            <div className="container mx-auto mt-32 max-w-[68%]">
                <div className="text-center">
                    <p className="font-bold text-3xl text-[#45474B]">Our Services</p>
                    <motion.div className="pt-1 bg-[#A149FA] max-w-[100px] mx-auto my-3" transition={{duration: 1, delay: 0.5, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0 }} viewport={{once: false, amount: 0.5}}></motion.div>
                </div>
                <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12">
                    {services && services.length > 0 ? (
                        services.map((item, index) => (
                            <motion.div key={item.id} variants={cardVariants} transition={{duration: 1, delay: index * 0.3, type: "spring", stiffness: 100}} whileInView={"visible"} initial="hidden" viewport={{once: true, amount: 0.5}}>
                                <Card shadow="md" isPressable onClick={() => handleCardClick(item.id)} className={`w-full hover:border border-[#A149FA] ${activeCard === item.id ? "min-h-[300px]" : ""}`}>
                                    <CardBody className="overflow-visible p-5">
                                        <div className="flex justify-center">
                                            <div className="max-h-[173px] max-w-[173px] overflow-hidden">
                                                <Image
                                                width="100%"
                                                height="100%"
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                                src={`https://api-compro.metrosoftware.id/dist/assets/img/services/${item.img}`}
                                            />
                                            </div>
                                        </div>

                                        <div className="mt-5">
                                            <p className="text-lg text-slate-800 font-semibold text-center">{item.title}</p>
                                            {activeCard === item.id && (
                                                <p className="text-default-500 mt-1">{item.description}</p>
                                            )}
                                        </div>
                                    </CardBody>
                                </Card>
                            </motion.div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500 mt-5">No Data</p>
                    )}
                </div>
            </div>

            {/* Happy Clients */}
            <div className="mt-32 overflow-hidden">
                <div className="text-center">
                    <p className="font-bold text-3xl text-[#45474B]">Happy Clients</p>
                    <motion.div 
                        className="pt-1 bg-[#A149FA] max-w-[100px] mx-auto my-3" 
                        transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }} 
                        whileInView={{ opacity: 1, scale: 1 }} 
                        initial={{ opacity: 0, scale: 0 }} 
                        viewport={{ once: false, amount: 0.5 }}
                    />
                </div>
                <div className="mt-12 pb-3 overflow-hidden">
                    <motion.div
                        className="flex"
                        animate={{
                            x: [`0%`, `-${100/3}%`]
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 20,
                                ease: "linear",
                            },
                        }}
                    >
                        {repeatedClients.length > 0 ? (
                            repeatedClients.map((item, index) => (
                                <div key={`${item.id}-${index}`} className="flex-shrink-0 w-[200px] mx-2">
                                    <Card
                                        shadow="sm"
                                        isPressable
                                        onPress={() => console.log("item pressed")}
                                        className="w-full h-full"
                                    >
                                        <CardBody className="overflow-visible p-5">
                                            <div className="flex justify-between items-center">
                                                <Image
                                                    width="100%"
                                                    alt={item.title}
                                                    className="max-w-[50px]"
                                                    src={`https://api-compro.metrosoftware.id/dist/assets/img/clients/${item.img}`}
                                                />
                                                <div className="text-small">
                                                    <p className="text-slate-800 font-semibold">
                                                        {item.title && item.title.length > 8 
                                                            ? `${item.title.substring(0, 8)}...` 
                                                            : item.title}
                                                    </p>
                                                    <p className="text-default-500 mt-1">
                                                        {item.desc && item.desc.length > 8 
                                                            ? `${item.desc.substring(0, 8)}...` 
                                                            : item.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-500 mt-5">No Data</p>
                        )}
                    </motion.div>
                </div>
            </div>

            {/* Project's Done */}
            <div className="container mx-auto mt-20">
                <div className="text-center">
                    <p className="font-bold text-3xl text-[#45474B]">Project's Done</p>
                    <motion.div className="pt-1 bg-[#A149FA] max-w-[100px] mx-auto my-3" transition={{duration: 1, delay: 0.5, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0 }} viewport={{once: false, amount: 0.5}}></motion.div>
                </div>
                <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12 mx-5 xl:mx-0">
                    {currentProjects && currentProjects.length > 0 ? (
                        currentProjects.map((item, index) => (
                        <motion.div key={item.id} variants={cardVariants} transition={{duration: 1, delay: index * 0.3, type: "spring", stiffness: 100}} whileInView={"visible"} initial="hidden" viewport={{once: true, amount: 0.5}}>
                        {/* <motion.div key={item.id} isPressable onPress={() => console.log("item pressed")} variants={cardVariants} transition={{duration: 1, delay: index * 0.3, type: "spring", stiffness: 100}} whileInView={"visible"} initial="hidden" viewport={{once: false, amount: 0.5}}> */}
                            <Card shadow="sm" isPressable onPress={() => console.log("item pressed")} className="w-full" as={Link} to={`/detail/${item.id}`}>
                            <CardBody className="overflow-visible p-0">
                                <Image
                                shadow="sm"
                                radius="lg"
                                width="100%"
                                alt={item.title}
                                className="w-full object-cover h-[250px]"
                                src={`https://api-compro.metrosoftware.id/dist/assets/img/projects/${item.img}`}
                                />

                                <div className="flex justify-between px-5 pt-5 pb-2">
                                    <p className="text-slate-800 font-semibold text-center">{item.title && item.title.length > 15 ? `${item.title.substring(0, 15)}...` : item.title}</p>
                                    <div className="flex gap-2">
                                        {item.r_service.map((service, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            {service.title === "UI UX Design" && (
                                            <img src={figma} alt="UI/UX" className="w-[20px] h-[20px]" />
                                            )}
                                            {service.title === "Web Development" && (
                                            <img src={web} alt="Web" className="w-[20px] h-[20px]" />
                                            )}
                                            {service.title === "Android Development" && (
                                            <img src={android} alt="Android" className="w-[20px] h-[20px]" />
                                            )}
                                        </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="px-5 pb-5 min-h-[60px]">
                                    <p className="text-default-500 text-small">{item.description && item.description.length > 80 ? `${item.description.substring(0, 80)}...` : item.description}</p>
                                </div>
                            </CardBody>
                        </Card>
                        {/* </motion.div> */}
                        </motion.div>
                    ))
                    ) : (
                        <p className="text-center text-gray-500 mt-5">No Data</p>
                    )}
                </div>
                <div className="flex flex-wrap gap-4 items-center mt-10 justify-center">
                    {projects.length > itemPerPage && (
                        <NextUIPagination
                            total={Math.ceil(projects.length / itemPerPage)}
                            initialPage={1}
                            page={currentPage}
                            onChange={handlePageChange}
                            color="secondary"
                        />
                    )}
                </div>
            </div>

            {/* What People Say */}
            <div className="container mx-auto mt-32 px-10 xl:px-0">
                <div className="text-center">
                    <p className="font-bold text-3xl text-[#45474B]">What People Say About Us</p>
                    <motion.div className="pt-1 bg-[#A149FA] max-w-[100px] mx-auto my-3" transition={{duration: 1, delay: 0.5, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0 }} viewport={{once: false, amount: 0.5}}></motion.div>
                </div>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper mt-12"
                    breakpoints={{
                        320: {   // untuk layar kecil
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        640: {   // untuk layar sedang
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {   // untuk layar tablet
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1024: {  // untuk layar desktop
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                    }}
                >
                        {testimonies && testimonies.length > 0 ? (
                            testimonies.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <Card shadow="sm" isPressable onPress={() => console.log("item pressed")} className="w-full h-full">
                                        <CardBody className="overflow-visible p-5">
                                            <div className="relative">
                                                <div className="absolute bg-[#23F9B5] w-[130px] h-[130px] rounded-full left-[-60px] top-[-70px]"></div>
                                            </div>
                                            <div className="flex z-10 items-center gap-3 mb-1">
                                                    <div className="rounded-full overflow-hidden w-[50px] h-[50px] shadow-md">
                                                        <img src={`https://api-compro.metrosoftware.id/dist/assets/img/comments/${item.img}`} alt="" className="w-full object-cover h-full" />
                                                    </div>
                                                    <div className="">
                                                        <p className="text-slate-800 font-semibold">
                                                            {item.name && item.name.length > 8 ? item.name.substring(0, 10) + "..." : item.name}
                                                        </p>
                                                        <p className="text-default-500 text-xs">{item.title && item.title.length > 15 ? item.title.substring(0, 15) + "..." : item.title}</p>
                                                    </div>
                                            </div>

                                            <div className="px-5 pb-5 z-10 mt-5 min-h-[60px]">
                                                <p className="text-default-500 text-xs">{item.comment && item.comment.length > 60 ? item.comment.substring(0, 70) + "..." : item.comment}</p>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </SwiperSlide>
                            ))
                        ) : (
                            <p className="text-center text-gray-500 mt-5">No Data</p>
                        )}
                </Swiper>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}
export default Home