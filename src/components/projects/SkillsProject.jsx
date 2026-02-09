


export default function SkillsProject({skills}) {

    return (

        <div className="flex_start_center gap_10">
            {skills?.map(skill => (
                <div key={skill.id} className="border px_10 py_4 radius_30 flex_center_center gap_6">
                    {/* <img src={skill?.icon} alt={skill?.title} className="avatar_xs"/> */}
                    <div className="text text-xs">{skill?.title}</div>
                </div>
            ))}
        </div>
    )
}