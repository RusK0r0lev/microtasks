type BodyPropsType = {
    title: string;
};
function Body({ title }: BodyPropsType) {
    return <div>{title}</div>;
}

export default Body;
