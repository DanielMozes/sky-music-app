import { Title } from "@solidjs/meta";

export default function MySiteTitle(props) {
	return <Title>{props.children} | SkyMusic</Title>;
}
