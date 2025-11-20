type FooterPropsType = {
    title: string;
};
function Footer({ title }: FooterPropsType) {
    return <div>{title}</div>;
}

export default Footer;
