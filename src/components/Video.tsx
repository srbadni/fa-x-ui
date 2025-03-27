"use client"
import { IKVideo } from "imagekitio-next";

interface VideoPropsType {
    path: string,
    className?: string,
}

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

export default function Video(props: VideoPropsType) {
    const {
        path,
        className
     } = props;
    return (
        <IKVideo urlEndpoint={urlEndpoint} path={path} className={className} controls/>
    )
}
