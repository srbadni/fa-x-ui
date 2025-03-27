import Image from "next/image";

interface ImageEditorPropsType {
    onClose: () => void;
    previewUrl: string,
    settings: {
        type: "original" | "wide" | "square";
        sensitive: boolean
    },
    setSettings: React.Dispatch<React.SetStateAction<{
        type: "original" | "wide" | "square";
        sensitive: boolean;
    }>>
}

export default function ImageEditor(props: ImageEditorPropsType) {
    const {
        onClose,
        previewUrl,
        setSettings,
        settings
    } = props;

    const handleChangeSensitive = (sensitive: boolean) => {
        setSettings((prevState) => ({ ...prevState, sensitive }));
    }

    const handleChangeType = (type: "original" | "wide" | "square") => {
        setSettings((prevState) => ({ ...prevState, type }));
    }

    return (
        <div className="fixed w-screen h-screen top-0 right-0 bg-black bg-opacity-75 z-10 flex items-center justify-center">
            <div className="bg-black rounded-xl p-12 flex flex-col gap-4">
                {/* قسمت بالای مدال */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <svg
                            width={32}
                            className="rotate-180 cursor-pointer"
                            onClick={onClose}
                            viewBox="0 0 24 24">
                            <path
                                fill="#e7e9ea"
                                d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z" />
                        </svg>
                        <h2 className="font-bold text-xl">بریدن رسانه</h2>
                    </div>
                    <button onClick={onClose} className="py-2 px-4 rounded-full bg-white text-black font-bold">ذخیره</button>
                </div>
                {/* قسمت عکس */}
                <div className="w-[600px] h-[600px] flex items-center">
                    <Image src={previewUrl} alt="" width={600} height={600} className={
                        `w-full ${settings.type === "original" ?
                            "h-full object-contain" :
                            settings.type === "square" ?
                                "aspect-square object-cover" :
                                "aspect-video object-cover"}`
                    } />
                </div>
                {/* تنظیمات ویرایش عکس */}
                <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleChangeType("original")}>
                            <svg width={24} viewBox="0 0 24 24">
                                <path className={
                                    settings.type === "original" ?
                                        "fill-iconBlue" :
                                        "fill-[#e7e9ea]"
                                } d="M3 7.5C3 6.119 4.119 5 5.5 5h13C19.881 5 21 6.119 21 7.5v9c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 19 3 17.881 3 16.5v-9zM5.5 7c-.276 0-.5.224-.5.5v9c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-9c0-.276-.224-.5-.5-.5h-13z" />
                            </svg>
                            اصلی
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleChangeType("wide")}>
                            <svg width={24} viewBox="0 0 24 24">
                                <path className={
                                    settings.type === "wide" ?
                                        "fill-iconBlue" :
                                        "fill-[#e7e9ea]"
                                } d="M3 9.5C3 8.119 4.119 7 5.5 7h13C19.881 7 21 8.119 21 9.5v5c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 17 3 15.881 3 14.5v-5zM5.5 9c-.276 0-.5.224-.5.5v5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-5c0-.276-.224-.5-.5-.5h-13z" />
                            </svg>
                            عریض
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleChangeType("square")}>
                            <svg width={24} viewBox="0 0 24 24">
                                <path className={
                                    settings.type === "square" ?
                                        "fill-iconBlue" :
                                        "fill-[#e7e9ea]"
                                } d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v13c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-13c0-.276-.224-.5-.5-.5h-13z" />
                            </svg>
                            مربع
                        </div>

                    </div>
                    <div onClick={() => handleChangeSensitive(!settings.sensitive)} className={`cursor-pointer py-1 px-4 text-black rounded-full ${settings.sensitive ? "bg-red-500" : "bg-white"}`}>
                        محتوای حساس
                    </div>
                </div>
            </div>
        </div>
    )
}
