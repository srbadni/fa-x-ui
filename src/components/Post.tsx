import Image from './Image'
import Postinfo from './Postinfo'
import PostInteractions from './PostInteractions'
import {imagekit} from '@/utils'
import Video from './Video'
import Link from "next/link";

interface FileDetailsResponse {
    width: number;
    height: number;
    filePath: string;
    url: string;
    fileType: string;
    customMetadata?: {
        sensitive: boolean
    };
}

export default async function Post({type}: { type?: "status" | "comment" }) {

    // const getFileDetails = (fileId: string): Promise<FileDetailsResponse> => {
    //     return new Promise((resolve, reject) => {
    //         imagekit.getFileDetails(fileId, function(error, result) {
    //             if(error) reject(error);
    //             else resolve(result as FileDetailsResponse);
    //         });
    //     });
    // }
    //
    // const fileDetails = await getFileDetails("67c06b5f432c4764164fc3f7");
    //
    // console.log(fileDetails, "fileDetails-")

    return (
        <div className='p-4 border-y-[1px] border-borderGray'>
            {/* نوع پست */}
            <div className='flex items-center gap-2 text-sm text-textGray mb-2 font-bold'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                    <path
                        fill="#71767b"
                        d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
                    />
                </svg>
                <span>Alireza بازپست کرد</span>
            </div>
            {/* محتوای پست */}
            <div className={`flex gap-4 ${type === "status" && "flex-col"}`}>
                {/* لوگو */}
                <div className={`${
                    type === "status" && "hidden"
                } relative w-10 h-10 rounded-full overflow-hidden`}>
                    <Image path={"general/avatar.png"} alt="devwithalireza" w={100} h={100} tr={true}/>
                </div>
                {/* محتوا */}
                <div className='flex-1 flex flex-col gap-2'>
                    {/* بالا */}
                    <div className="w-full flex justify-between">
                        <Link href={`/devwithalireza`} className="flex gap-4">
                            <div
                                className={`${
                                    type !== "status" && "hidden"
                                } relative w-10 h-10 rounded-full overflow-hidden`}
                            >
                                <Image
                                    path="general/avatar.png"
                                    alt=""
                                    w={100}
                                    h={100}
                                    tr={true}
                                />
                            </div>
                            <div className={`flex items-center gap-2 flex-wrap ${
                                type === "status" && "flex-col gap-0 !items-start"
                            }`}>
                                <h2 className='font-bold text-md'>Alireza Sarabadani</h2>
                                <span
                                    className={`text-textGray text-right direction-ltr ${type === "status" ? "text-sm" : ""}`}>@devwithalireza</span>
                                {type !== "status" && (
                                    <span className="text-textGray">1 روز پیش</span>
                                )}
                            </div>
                        </Link>
                        <Postinfo/>
                    </div>
                    {/* متن پست و رسانه */}
                    <Link href={`/devwithalireza/status/123`}>
                        <p className={`${type === "status" && "text-lg"}`}>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
                            است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                            تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
                            در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                            افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
                            فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
                            شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                            پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </p>
                    </Link>
                    <Image path="general/post.jpg" alt="" w={600} h={600}/>
                    {/*{*/}
                    {/*    fileDetails && fileDetails.fileType === "image" ? (*/}
                    {/*        (*/}
                    {/*            <Image path={fileDetails.filePath} w={fileDetails.width} h={fileDetails.height} alt="" className={fileDetails.customMetadata?.sensitive ? "blur-lg" : ""}/>*/}
                    {/*        )*/}
                    {/*    ) : <Video path={fileDetails.filePath} className={fileDetails.customMetadata?.sensitive ? "blur-lg" : ""}/>*/}
                    {/*}*/}
                    {type === "status" && (
                        <span className="text-textGray">۸:۳۰ بعدازظهر · ۲۳ آوریل ۲۰۲۵</span>
                    )}
                    <PostInteractions/>
                </div>
            </div>
        </div>
    )
}
