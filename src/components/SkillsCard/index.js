const SkillsCard = props => {
  const {skillDetails} = props
  const {imageUrl, name} = skillDetails
  return (
    <li className="skills">
      <div className="con">
        <img src={imageUrl} alt={name} className="skills" />
        <p>{name}</p>
      </div>
    </li>
  )
}
export default SkillsCard
