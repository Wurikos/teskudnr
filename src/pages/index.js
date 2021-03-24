import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.App text-align="left" width="1000px">
			<Override slot="todoform" text-align="left">
				<Override slot="input" text-align="left" placeholder="Add task here" margin="0px 0px 0px 0px" />
				<Override slot="button" />
			</Override>
			<Override slot="todolist">
				<Override slot="todo" align-items="center" justify-content="space-around">
					<Override slot="icon1" icon="MdDone" color="#20ff06" />
					<Override slot="btnGroup" display="flex" />
					<Override slot="icon3" color="#e3ff0b" />
					<Override slot="icon2" color="#ff0000" />
					<Override slot="span" background="#ede5e5" />
				</Override>
			</Override>
			<Override slot="todolist/todo,todo0/icon1" />
		</Components.App>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});