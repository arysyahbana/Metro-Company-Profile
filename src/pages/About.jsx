import Nav from "../components/layouts/Navbar"
import Vue from "../assets/vue.svg";
import Laravel from "../assets/laravel.svg";
import Reactjs from "../assets/react.svg";
import Vscode from "../assets/vscode.svg";
import Figma from "../assets/figma.svg";
import Node from "../assets/node.svg";
import Vision from "../../public/images/vision.jpg";
import Footer from "../components/layouts/Footer";
import LowCost from "../../public/images/Why Us/01-Low Cost.png";
import Quality from "../../public/images/Why Us/02-Quality.png";
import Professional from "../../public/images/Why Us/03-Professional.png";
import Update from "../../public/images/Why Us/04-Up to Date.png";
import Security from "../../public/images/Why Us/05-Data Decurity.png";
import bg from "../assets/bg.png";
import { Card, CardBody } from "@nextui-org/react";
import {Pagination as NextUIPagination} from "@nextui-org/react";
import {motion} from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import { useEffect, useState } from "react";
import axios from "axios";



const About = () => {
    
    const cardVariants = {
      hidden: { opacity: 0, y: 100 },
      visible: { opacity: 1, y: 0 },
    };

    const [progress, setProgress] = useState([]);
    const [teams, setTeams] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 12;

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };


    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const currentTeams = teams.slice(indexOfFirstItem, indexOfLastItem);

     useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api-compro.metrosoftware.id/api/dashboard');
                setProgress(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

     useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api-compro.metrosoftware.id/api/teams');
                setTeams(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    
    return (
        <div>
            <div className="banner">
                <div className="pb-5"></div>
                <Nav />
                {/* Hero */}
                <div className="container mx-auto mt-52 px-5">
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <motion.p className="text-5xl font-bold text-slate-700" transition={{duration: 1, delay: 0.6, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} viewport={{once: false, amount: 0.5}}>Tentang Kami</motion.p>
                        <div className="flex gap-2 mt-1">
                            <motion.img src={Vue} alt="" transition={{duration: 1, delay: 0.8, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -50 }} viewport={{once: false, amount: 0.5}}/>
                            <motion.img src={Laravel} alt="" transition={{duration: 1, delay: 1, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -50 }} viewport={{once: false, amount: 0.5}}/>
                            <motion.img src={Reactjs} alt="" transition={{duration: 1, delay: 1.2, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -50 }} viewport={{once: false, amount: 0.5}} />
                            <motion.img src={Node} alt="" transition={{duration: 1, delay: 1.4, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -50 }} viewport={{once: false, amount: 0.5}} />
                            <motion.img src={Vscode} alt="" transition={{duration: 1, delay: 1.6, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -50 }} viewport={{once: false, amount: 0.5}} />
                            <motion.img src={Figma} alt="" transition={{duration: 1, delay: 1.8, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -50 }} viewport={{once: false, amount: 0.5}} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Vision & Mission */}
            <div className="container mx-auto mt-5 px-5 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <motion.img src={Vision} alt="" className="rounded-3xl" transition={{duration: 1, delay: 0.5, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} viewport={{once: true, amount: 0.5}}/>
                    <div className="flex flex-col justify-center">
                        <p className="font-bold text-3xl text-[#45474B]">Our Vision</p>
                        <motion.div className="pt-1 bg-[#A149FA] w-full max-w-[100px] my-3" transition={{duration: 1, delay: 1, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0 }} viewport={{once: false, amount: 0.5}}></motion.div>
                        <motion.p className="text-slate-500" transition={{duration: 1, delay: 1, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} viewport={{once: false, amount: 0.5}}>Menjadi perusahaan terkemuka di industri perangkat lunak dan solusi teknologi di Indonesia serta menghasilkan inovasi yang memberdayakan bisnis dan masyarakat.</motion.p>
                    </div>
                </div>
                <div className="mt-16 md:px-72">
                    <p className="font-bold text-3xl text-[#45474B]">Our Mission</p>
                    <div className="flex justify-end max-w-[180px]">
                        <motion.div className="pt-1 bg-[#A149FA] w-full max-w-[100px] my-3" transition={{duration: 1, delay: 0.5, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0 }} viewport={{once: false, amount: 0.5}}></motion.div>
                    </div>
                    <ol className="text-slate-500 list-decimal px-5">
                        <motion.li className="mb-3" transition={{duration: 1, delay: 1, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} viewport={{once: true, amount: 0.5}}>Mengembangkan perangkat lunak dan solusi teknologi yang inovatif dan berkinerja tinggi untuk memenuhi kebutuhan bisnis dan industri di Indonesia.</motion.li>
                        <motion.li className="mb-3" transition={{duration: 1, delay: 1.2, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} viewport={{once: true, amount: 0.5}}>Menyediakan layanan konsultasi dan pengembangan solusi teknologi yang handal dan sesuai dengan tuntutan pasar.</motion.li>
                        <motion.li className="mb-3" transition={{duration: 1, delay: 1.4, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} viewport={{once: true, amount: 0.5}}>Membangun kemitraan jangka panjang dengan pelanggan dan mitra bisnis untuk mencapai pertumbuhan yang saling menguntungkan.</motion.li>
                        <motion.li className="mb-3" transition={{duration: 1, delay: 1.6, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} viewport={{once: true, amount: 0.5}}>Menyediakan dukungan teknis yang tanggap dan berkualitas tinggi kepada pelanggan untuk memastikan keberhasilan penggunaan solusi kami.</motion.li>
                        <motion.li className="mb-3" transition={{duration: 1, delay: 1.8, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} viewport={{once: true, amount: 0.5}}>Mengutamakan keunggulan dalam pengembangan dan pengelolaan proyek, dengan mengikuti praktik terbaik industri dan menggunakan teknologi terkini.</motion.li>
                        <motion.li transition={{duration: 1, delay: 2, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} viewport={{once: true, amount: 0.5}}>Mendorong inovasi dan pembaruan terus-menerus dalam rangka mengikuti perkembangan teknologi yang cepat.</motion.li>
                    </ol>
                </div>
            </div>

            {/* Why Us */}
            <div className="mt-32 container mx-auto overflow-hidden">
                <div className="text-center">
                    <p className="font-bold text-3xl text-[#45474B]">Why US</p>
                    <motion.div className="pt-1 bg-[#A149FA] max-w-[100px] mx-auto my-3" transition={{duration: 1, delay: 1, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0 }} viewport={{once: false, amount: 0.5}}></motion.div>
                </div>
                {/* Low Cost */}
                <div className="flex flex-col md:flex-row gap-5 mt-5 pb-3 items-center md:justify-center">
                    <div className="text-end flex flex-col justify-center md:w-1/3">
                        <motion.p className="text-2xl text-[#45474B] font-bold text-center md:text-start" transition={{duration: 1, delay: 0.5, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x:50 }} viewport={{once: true, amount: 0.5}}>1. Low Cost</motion.p>
                        <motion.p className="text-slate-500 text-center md:text-start" transition={{duration: 1, delay: 0.7, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x:50 }} viewport={{once: true, amount: 0.5}}>Dengan biaya produksi yang lebih rendah, kami dapat memberikan solusi perangkat lunak berkualitas tinggi dengan harga yang lebih terjangkau, memungkinkan pengguna untuk mengoptimalkan pengeluaran.</motion.p>
                    </div>
                   <div className="md:w-1/3">
                        <motion.img src={LowCost} alt="" className="w-[350px]" transition={{duration: 1, delay: 0.5, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x:-50 }} viewport={{once: true, amount: 0.5}} />
                   </div>
                </div>
                {/* Quality */}
                <div className="flex flex-col md:flex-row gap-5 mt-5 pb-3 justify-center">
                   <div className="md:w-1/3 flex justify-center order-last md:justify-end md:order-first">
                        <motion.img src={Quality} alt="" className="w-[350px]" transition={{duration: 1, delay: 0.5, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x:50 }} viewport={{once: true, amount: 0.5}} />
                   </div>
                    <div className="flex flex-col justify-center order-first md:order-last md:w-1/3">
                        <motion.p className="text-2xl text-[#45474B] font-bold text-center md:text-start" transition={{duration: 1, delay: 0.5, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x:-50 }} viewport={{once: true, amount: 0.5}}>2. Commitment to Quality</motion.p>
                        <motion.p className="text-slate-500 ps-7 text-center md:text-start" transition={{duration: 1, delay: 0.7, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x:-50 }} viewport={{once: true, amount: 0.5}}>Kami berkomitmen dalam memberikan produk berkualitas tinggi. Memastikan bahwa software yang dikembangkan bebas dari bug dan sesuai kebutuhan pengguna.</motion.p>
                    </div>
                </div>
                {/* Professional */}
                <div className="flex flex-col md:flex-row gap-5 mt-5 pb-3 items-center md:justify-center">
                    <div className="text-end flex flex-col justify-center md:w-1/3">
                        <motion.p className="text-2xl text-[#45474B] font-bold text-center md:text-start" transition={{duration: 1, delay: 0.5, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x:50 }} viewport={{once: true, amount: 0.5}}>3. Professional</motion.p>
                        <motion.p className="text-slate-500 text-center md:text-start" transition={{duration: 1, delay: 0.7, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x:50 }} viewport={{once: true, amount: 0.5}}>Tim yang terampil dan berpengalaman dalam pengembangan software, sehingga produk yang dihasilkan memiliki kualitas dan performa yang unggul.</motion.p>
                    </div>
                   <div className="md:w-1/3">
                        <motion.img src={Professional} alt="" className="w-[350px]" transition={{duration: 1, delay: 0.5, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x:-50 }} viewport={{once: true, amount: 0.5}} />
                   </div>
                </div>
                {/* Up to date */}
                <div className="flex flex-col md:flex-row gap-5 mt-5 pb-3 justify-center">
                   <div className="md:w-1/3 flex justify-center order-last md:justify-end md:order-first">
                        <motion.img src={Update} alt="" className="w-[350px]" transition={{duration: 1, delay: 0.5, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x:50 }} viewport={{once: true, amount: 0.5}} />
                   </div>
                    <div className="flex flex-col justify-center order-first md:order-last md:w-1/3">
                        <motion.p className="text-2xl text-[#45474B] font-bold text-center md:text-start" transition={{duration: 1, delay: 0.5, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x:-50 }} viewport={{once: true, amount: 0.5}}>4. Up to date</motion.p>
                        <motion.p className="text-slate-500 ps-7 text-center md:text-start" transition={{duration: 1, delay: 0.7, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x:-50 }} viewport={{once: true, amount: 0.5}}>Selalu mengikuti perkembangan zaman. Kami menciptakan solusi yang modern dan sesuai dengan tren terkini.</motion.p>
                    </div>
                </div>
                {/* Professional */}
                <div className="flex flex-col md:flex-row gap-5 mt-5 pb-3 items-center md:justify-center">
                    <div className="text-end flex flex-col justify-center md:w-1/3">
                        <motion.p className="text-2xl text-[#45474B] font-bold text-center md:text-start" transition={{duration: 1, delay: 0.5, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x:50 }} viewport={{once: true, amount: 0.5}}>5. Data Security</motion.p>
                        <motion.p className="text-slate-500 text-center md:text-start" transition={{duration: 1, delay: 0.7, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x:50 }} viewport={{once: true, amount: 0.5}}>Kemanan data menjadi prioritas utama. Kami memastikan untuk melindungi data sensitif klien dan mengimplementasikan standar keamanan terkini.</motion.p>
                    </div>
                   <div className="md:w-1/3">
                        <motion.img src={Security} alt="" className="w-[350px]" transition={{duration: 1, delay: 0.5, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x:-50 }} viewport={{once: true, amount: 0.5}} />
                   </div>
                </div>
            </div>

           {/* Progress */}
            <div className="container mx-auto mt-32 max-w-[68%]">
                <motion.div className="relative flex justify-center" transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} viewport={{ once: true, amount: 0.5 }}>
                    <img src={bg} alt="" className="object-fit-cover w-full h-[200px] rounded-3xl shadow-lg" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-3/5 px-12">
                        <div className="md:flex justify-between items-center py-8 hidden">
                            <div className="w-1/3 text-center">
                                <p className="text-[#23F9B5] text-3xl mt-1">{progress.workhours}+</p>
                                <p className="text-white text-lg">{progress.workhoursDesc}</p>
                            </div>
                            <div className="w-1/3 text-center">
                                <p className="text-[#23F9B5] text-3xl mt-1">{progress.projectTotal}+</p>
                                <p className="text-white text-lg">{progress.projectDesc}</p>
                            </div>
                            <div className="w-1/3 text-center">
                                <p className="text-[#23F9B5] text-3xl mt-1">{progress.clientTotal}+</p>
                                <p className="text-white text-lg">{progress.clientDesc}</p>
                            </div>
                        </div>

                        <div className="block mt-8 md:hidden">
                            <Swiper spaceBetween={50} slidesPerView={1} modules={[Autoplay]} autoplay={{ delay: 1000 }}>
                                <SwiperSlide>
                                    <div className="text-center">
                                        <p className="text-[#23F9B5] text-3xl mt-1">{progress.workhours}+</p>
                                        <p className="text-white text-lg">{progress.workhoursDesc}</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="text-center">
                                        <p className="text-[#23F9B5] text-3xl mt-1">{progress.projectTotal}+</p>
                                        <p className="text-white text-lg">{progress.projectDesc}</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="text-center">
                                        <p className="text-[#23F9B5] text-3xl mt-1">{progress.clientTotal}+</p>
                                        <p className="text-white text-lg">{progress.clientDesc}</p>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </motion.div>
            </div>


            {/* Team */}
             <div className="container mx-auto mt-32 px-5 md:px-0">
                <div className="text-center">
                    <p className="font-bold text-3xl text-[#45474B]">Meet Our Team</p>
                    <motion.div className="pt-1 bg-[#A149FA] max-w-[100px] mx-auto my-3" transition={{duration: 1, delay: 1, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0 }} viewport={{once: false, amount: 0.5}}></motion.div>
                </div>
                <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 mt-12">
                    {currentTeams && currentTeams.length > 0 ? (
                        currentTeams.map((item, index) => (
                            <motion.div className="flex flex-col" key={item.id} variants={cardVariants} transition={{duration: 1, delay: index * 0.3, type: "spring", stiffness: 100}} whileInView={"visible"} initial="hidden" viewport={{once: false, amount: 0.5}}>
                                <Card isPressable onPress={() => console.log("item pressed")} className="w-full h-full border shadow hover:border-none relative group">
                                    <CardBody className="overflow-visible py-6">
                                        <img src={`https://api-compro.metrosoftware.id/dist/assets/img/teams/${item.img}`} alt="" className="rounded-full w-[100px] h-[100px] object-cover mx-auto mb-4 shadow-md" />
                                        <p className="text-[#A149FA] font-bold text-center text-lg">{item.name}</p>
                                        <p className="text-default-500 text-xs text-center">
                                            {item.r_skill.slice(0, 2).map((skill, skillIndex) => (
                                                <p key={skillIndex}>{skill.skill}</p>
                                            ))}
                                        </p>
                                    </CardBody>
                                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#A149FA] transition-all duration-300 group-hover:w-full"></div>
                                </Card>
                            </motion.div>
                        ))
                    ) : 
                    (
                        <p>Team not found</p>
                    )}
                </div>
                <div className="flex flex-wrap gap-4 items-center mt-10 justify-center">
                    {teams.length > itemPerPage && (
                        <NextUIPagination
                            total={Math.ceil(teams.length / itemPerPage)}
                            initialPage={1}
                            page={currentPage}
                            onChange={handlePageChange}
                            color="secondary"
                        />
                    )}
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}
export default About