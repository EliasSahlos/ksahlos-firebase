import ProfileImage from "@/components/About/profile-img";
import AchievementsBlock from "@/components/About/achievements-block";
import QuoteBlock from "@/components/About/quote-block";
import Head from "next/head";
import AboutPicture from "@/components/shared/about-picture";

function AboutPage() {
    return (
        <>
            <Head>
                <title>Ksahlos - About</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="lg:grid lg:grid-cols-3 bg-[#F2F2F2] w-full h-full p-10">
                <div
                    className="flex justify-center items-center relative text-sm lg:mb-48 lg:p-6"
                    data-aos="zoom-in-up"
                    data-aos-duration="800"
                    data-aos-once="true"
                >
                    <AboutPicture width={420} height={420} />
                </div>
                <div
                    className="flex justify-center items-center bg-white rounded shadow-md text-sm p-6 my-10 lg:my-24 lg:mb-72 lg:mx-10 md:mx-16"
                    data-aos="zoom-in-up"
                    data-aos-delay="200"
                    data-aos-duration="800"
                    data-aos-once="true"
                >
                    <AchievementsBlock />
                </div>
                <div
                    className="flex justify-center items-center text-sm my-10 mx-4 lg:mb-48 lg:p-6"
                    data-aos="zoom-in-up"
                    data-aos-delay="400"
                    data-aos-duration="800"
                    data-aos-once="true"
                >
                    <div className="leading-6 text-justify 2xl:mr-14 2xl:ml-10">
                        <QuoteBlock />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutPage;
