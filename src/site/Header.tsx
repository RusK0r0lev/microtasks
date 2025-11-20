type HeaderPropsType = {
    title: string;
};
function Header({ title }: HeaderPropsType) {
    return <div>{title}</div>;
}

export default Header;
