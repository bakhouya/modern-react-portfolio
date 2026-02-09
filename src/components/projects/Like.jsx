

import { ThumbsDown , ThumbsUp } from "lucide-react"
import { useMutation, useQueryClient } from "@tanstack/react-query" ;
import { likeProject } from "../../services/trackService" ;
import Clicked from "../../utils/Click"
import { useState } from "react";


export default function LikeProject({project, count, list}) {
    const [countView, setCountView] = useState(count)

    const queryClient = useQueryClient();
    const visitor = JSON.parse(localStorage.getItem("visitor") || "{}");
    const visitorId = visitor?.visitor?.id ;

    const mutation = useMutation({
        mutationFn: () => likeProject(project, visitorId),
        onSuccess: (data) => {
            setCountView(data.likes_count)
            queryClient.invalidateQueries({ queryKey: ["projects"] });
        },onError: (error) => {
            console.error("Like error:", error);
        },
    });

    const handleLike = () => {Clicked(), mutation.mutate();};   

    return (
        <>
        <div className="pointer flex_start_center gap_5" type="button" onClick={handleLike}>
            <ThumbsUp  size={18} className="my_end_4"/> {list ? count : countView}
        </div>
        </>
    )
}