import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Box, Icon, Span, Strong } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Menu, Stack, Section } from "@quarkly/components";
import * as Components from "components";
import { FaVk, FaFacebookF, FaTwitter, FaInstagram, FaOdnoklassniki } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Главная - Работа в uTeam
			</title>
			<meta name={"description"} content={"Работа в uCoz. Актуальные вакансии компании в российских офисах и удаленная работа. Как попасть в команду, и о нашем коллективе — uTeam."} />
			<meta property={"og:title"} content={"Работа в uTeam"} />
			<meta property={"og:description"} content={"Работа в uCoz. Актуальные вакансии компании в российских офисах и удаленная работа. Как попасть в команду, и о нашем коллективе — uTeam."} />
			<meta property={"og:image"} content={"https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/favicon_uteam.png?v=2021-02-01T19:35:08.128Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/favicon_uteam.png?v=2021-02-01T19:35:08.128Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/favicon_uteam.png?v=2021-02-01T19:35:08.128Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/favicon_uteam.png?v=2021-02-01T19:35:08.128Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/favicon_uteam.png?v=2021-02-01T19:35:08.128Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/favicon_uteam.png?v=2021-02-01T19:35:08.128Z"} />
			<meta name={"msapplication-TileColor"} content={"#5291FA"} />
		</Helmet>
		<Section
			height="100vh"
			background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/Photo2.jpg?v=2021-01-25T00:03:55.645Z) center/cover no-repeat scroll padding-box"
			padding="0px 0 6px 0"
			quarkly-title="HeroBlock"
			lg-display="none"
		>
			<Override
				slot="SectionContent"
				max-width="none"
				width="100%"
				justify-content="space-between"
				align-items="center"
				padding="0px 0px 8px 0px"
				position="relative"
				nout-justify-content="flex-start"
			/>
			<Stack margin="0px 0px 0px 0px" gap="0px" width="100%">
				{"    "}
				<StackItem width="45%" display="flex" nout-width="70%">
					<Override slot="StackItemContent" align-items="flex-start" padding="15px 0px 0px 30px" />
					{"        "}
					<Box display="flex" align-items="center">
						<Link href="/">
							<Image
								src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/logowhite.svg?v=2021-01-26T19:12:20.383Z"
								color="#ffffff"
								width="50px"
								height="50px"
								margin="3px 10px 3px 3px"
								padding="0px 0px 0px 0px"
							/>
						</Link>
						<Text font="normal 500 18px/50px 'AvenirNextCyrMedium', sans-serif" margin="0px 0px 0px 0px" display="inline-block" color="#ffffff">
							<Link href="https://ru.uteam.pro/" color="#ffffff" text-decoration-line="initial" font="500 18px/50px ">
								Вакансии в России
							</Link>
						</Text>
						<Text
							font="normal 300 14px/19px 'AvenirNextCyrMedium', sans-serif"
							margin="3px 0px 0px 12px"
							display="none"
							color="#ffffff"
							nout-display="none"
						>
							<Link
								href="http://ua.uteam.pro/"
								color="#ffffff"
								text-decoration-line="initial"
								hover-color="#ffe02d"
								transition="color 0.2s ease 0s"
							>
								Вакансії в Україні{" "}
							</Link>
						</Text>
						<Text
							font="normal 300 14px/19px 'AvenirNextCyrMedium', sans-serif"
							margin="3px 0px 0px 12px"
							display="inline-block"
							color="#ffffff"
							nout-display="none"
						>
							<Link
								href="http://en.uteam.pro/"
								color="#ffffff"
								text-decoration-line="initial"
								hover-color="#ffe02d"
								transition="color 0.2s ease 0s"
							>
								Applying from overseas
							</Link>
						</Text>
					</Box>
				</StackItem>
				<StackItem
					width="50%"
					display="none"
					nout-width="30%"
					lg-width="30%"
					sm-width="15%"
					nout-display="block"
				>
					<Override slot="StackItemContent" align-items="center" padding="15px 30px 13px 30px" justify-content="flex-end" />
					<Components.MobileSide2
						flex="1 0 auto"
						nout-position="relative"
						nout-z-index="3"
						nout-display="flex"
						nout-justify-content="flex-end"
						nout-align-items="center"
						display="none"
						nout-top="0px"
					>
						<Override
							slot="Content2"
							display="flex"
							align-items="center"
							nout-position="fixed"
							nout-top={0}
							nout-left={0}
							nout-z-index="5"
							nout-width="100%"
							nout-height="100%"
							nout-background="white"
							nout-flex-direction="column"
						/>
						<Override
							slot="Button2"
							display="none"
							nout-display="flex"
							nout-width="33px"
							nout-height="28px"
							nout-z-index="6"
							nout-top="35px"
							sm-margin="-3px 0px 0px 0px"
							nout-cursor="pointer"
						/>
						<Override
							slot="Button Liner"
							nout-min-height="3px"
							border-radius="6px"
							nout-position="absolute"
							min-height={0}
							min-width={0}
							nout-background="#ffffff"
						/>
						<Override
							slot="Button Liner1"
							nout-top="4px"
							border-radius="6px"
							nout-width="22px"
							nout-right="0px"
						/>
						<Override slot="Button Liner2" nout-top="11px" nout-border-radius="6px" nout-right="0px" />
						<Override
							slot="Button Liner3"
							nout-top="18px"
							nout-border-radius="6px"
							nout-right="0px"
							nout-background="#ffffff"
						/>
						<Override slot="Button Liner1 :closed" nout-width="22px" nout-background="#ffffff" />
						<Override slot="Button Liner2 :closed" nout-width="22px" nout-background="#ffffff" />
						<Override slot="Button Liner3 :closed" nout-width="22px" />
						<Override slot="Button Liner2 :open" nout-opacity="0" nout-width="32px" />
						<Override slot="Button Liner1 :open" nout-width="36px" nout-transform="translateY(12px) rotate(225deg)" nout-background="--color-dark" />
						<Override
							slot="Button Liner3 :open"
							nout-width="36px"
							nout-transform="translateY(-12px) rotate(135deg)"
							background="--color-green"
							nout-background="#000000"
						/>
						<Override slot="Content2 :closed" nout-opacity="0" nout-transition="transform --transitionDuration-normal step-end 0s,opacity --transitionDuration-normal --transitionTimingFunction-easeOut" nout-transform="translateY(-100%)" />
						<Override slot="Content2 :open" nout-transform="translateY(0%)" nout-transition="transform --transitionDuration-normal step-start 0s,opacity --transitionDuration-normal --transitionTimingFunction-easeOut" nout-opacity="1" />
						<Override slot="Button2 :open" nout-position="fixed" />
						<Box
							nout-width="100%"
							nout-display="flex"
							nout-align-items="center"
							nout-padding="0px 0px 0px 0px"
							nout-margin="0px 0px 0px 33px"
						>
							<Image
								width="64px"
								height="64px"
								nout-width="50px"
								nout-height="50px"
								src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/logoblue.svg?v=2021-01-25T20:59:50.954Z"
							/>
							<Text
								flex="0 0 auto"
								margin="0px 0px 0px 0px"
								font="--headline3"
								nout-z-index="6"
								display="none"
								nout-display="block"
								nout-width="90%"
								nout-margin="24px 0px 24px 12px"
								nout-font="normal 500 18px/42px 'AvenirNextCyrMedium', sans-serif"
							>
								Вакансии в России
							</Text>
						</Box>
						<Menu
							flex="1 1 auto"
							display="flex"
							align-items="center"
							justify-content="center"
							nout-flex="0 1 auto"
							nout-flex-direction="column"
							nout-padding="6px 6px 0px 6px"
							nout-margin="15px 0px 0px 0px"
						>
							<Override slot="item-404" display="none" />
							<Override slot="item-index" display="none" nout-display="block" />
							<Override
								slot="link"
								nout-text-decoration-line="initial"
								nout-font="18px AvenirNextCyrRegular, sans-serif"
								nout-letter-spacing=".2px"
								nout-padding="0px 0px 0px 0px"
								nout-color="#263238"
							/>
							<Override slot="item" nout-padding="15px 25px 15px 25px" />
							<Override slot="link-index">
								Главная
							</Override>
							<Override slot="link-active" nout-color="#FFE02D" nout-cursor="default" />
						</Menu>
						<StackItem width="70%" display="flex" lg-width="100%" nout-width="100%">
							<Override
								slot="StackItemContent"
								align-items="flex-end"
								padding="13px 30px 14px 30px"
								nout-flex-direction="column"
								nout-justify-content="center"
								nout-align-items="center"
								nout-padding="0px 30px 0px 30px"
							/>
							{"        "}
							<Text
								font="normal 300 14px/19px 'AvenirNextCyrMedium', sans-serif"
								margin="3px 0px 0px 22px"
								display="inline-block"
								color="#9BABBF"
								lg-margin="10px 0px 0px 22px"
								nout-padding="15px 25px 15px 25px"
								nout-margin="0px 0px 0px 0px"
							>
								<Link
									href="http://en.uteam.pro/"
									color="#4a8cfa"
									text-decoration-line="initial"
									hover-color="#3d72cc"
									transition="color 0.2s ease 0s"
									font="300 14px/19px 'AvenirNextCyrMedium'"
									lg-padding="0px 0px 0px 0px"
									lg-margin="0px 0px 0px 0px"
									nout-font="18px AvenirNextCyrRegular, sans-serif"
									nout-padding="0px 0px 0px 0px"
								>
									Applying from overseas
								</Link>
							</Text>
							<Text
								font="normal 300 14px/19px 'AvenirNextCyrMedium', sans-serif"
								margin="3px 0px 0px 22px"
								display="inline-block"
								color="#9BABBF"
								lg-margin="10px 0px 0px 22px"
								nout-margin="0px 0px 0px 0px"
								nout-padding="15px 25px 15px 25px"
								nout-display="none"
							>
								<Link
									href="http://ua.uteam.pro/"
									color="#4a8cfa"
									text-decoration-line="initial"
									hover-color="#3d72cc"
									transition="color 0.2s ease 0s"
									font="300 14px/19px 'AvenirNextCyrMedium'"
									lg-padding="0px 0px 0px 0px"
									lg-margin="0px 0px 0px 0px"
									nout-font="18px AvenirNextCyrRegular, sans-serif"
								>
									Вакансії в Україні{" "}
								</Link>
							</Text>
						</StackItem>
						<StackItem width="30%" display="flex" lg-width="100%" nout-width="100%">
							<Override
								slot="StackItemContent"
								align-items="center"
								padding="13px 30px 14px 30px"
								justify-content="flex-end"
								lg-justify-content="center"
								nout-justify-content="center"
								nout-margin="10px 0px 0px 0px"
							/>
							<Link
								href="https://www.facebook.com/ucoz"
								target="_blank"
								margin="0px 15px 0px 0px"
								border-color="#AFC1D8"
								color="#AFC1D8"
								border-radius="50%"
								border-width="2px"
								border-style="solid"
								hover-background="#4a8cfa"
								hover-color="#ffffff"
								hover-border-color="#4a8cfa"
							>
								<Icon
									category="fa"
									icon={FaVk}
									border-radius="50%"
									padding="5px 5px 5px 5px"
									transition="all 0.2s linear 0s"
									size="20px"
									hover-color="inherit"
									color="inherit"
								/>
							</Link>
							<Link
								href="https://www.facebook.com/ucoz"
								target="_blank"
								margin="0px 15px 0px 0px"
								border-color="#AFC1D8"
								color="#AFC1D8"
								border-radius="50%"
								border-width="2px"
								border-style="solid"
								hover-background="#4a8cfa"
								hover-color="#ffffff"
								hover-border-color="#4a8cfa"
							>
								<Icon
									category="fa"
									icon={FaFacebookF}
									border-radius="50%"
									padding="5px 5px 5px 5px"
									transition="all 0.2s linear 0s"
									size="20px"
									hover-color="inherit"
									color="inherit"
								/>
							</Link>
							<Link
								href="https://twitter.com/ucoz_ru"
								target="_blank"
								margin="0px 15px 0px 0px"
								border-color="#AFC1D8"
								color="#AFC1D8"
								border-radius="50%"
								border-width="2px"
								border-style="solid"
								hover-background="#4a8cfa"
								hover-color="#ffffff"
								hover-border-color="#4a8cfa"
							>
								<Icon
									category="fa"
									icon={FaTwitter}
									border-radius="50%"
									padding="5px 5px 5px 5px"
									transition="all 0.2s linear 0s"
									size="20px"
									hover-color="inherit"
									color="inherit"
								/>
							</Link>
							<Link
								href="https://instagram.com/ucoz_ru"
								target="_blank"
								margin="0px 15px 0px 0px"
								border-color="#AFC1D8"
								color="#AFC1D8"
								border-radius="50%"
								border-width="2px"
								border-style="solid"
								hover-background="#4a8cfa"
								hover-color="#ffffff"
								hover-border-color="#4a8cfa"
							>
								<Icon
									category="fa"
									icon={FaInstagram}
									border-radius="50%"
									padding="5px 5px 5px 5px"
									transition="all 0.2s linear 0s"
									size="20px"
									hover-color="inherit"
									color="inherit"
								/>
							</Link>
							<Link
								href="http://ok.ru/ucozru"
								target="_blank"
								margin="0px 15px 0px 0px"
								border-color="#AFC1D8"
								color="#AFC1D8"
								border-radius="50%"
								border-width="2px"
								border-style="solid"
								hover-background="#4a8cfa"
								hover-color="#ffffff"
								hover-border-color="#4a8cfa"
								nout-margin="0px 0px 0px 0px"
							>
								<Icon
									category="fa"
									icon={FaOdnoklassniki}
									border-radius="50%"
									padding="5px 5px 5px 5px"
									transition="all 0.2s linear 0s"
									size="20px"
									hover-color="inherit"
									color="inherit"
								/>
							</Link>
							{"        "}
						</StackItem>
					</Components.MobileSide2>
					<Menu display="flex" nout-display="none">
						<Override slot="item-404" display="none" />
						<Override slot="link-index" text-decoration-line="initial">
							Главная
						</Override>
						<Override slot="item-active" color="#4a8cfa" />
						<Override slot="link-active" color="#4a8cfa" />
						<Override
							slot="link"
							transition="color 0.3s ease-in-out 0s"
							font="400 16px/24px 'AvenirNextCyrMedium'"
							text-decoration-line="initial"
							color="#263238"
							hover-color="#4a8cfa"
						/>
					</Menu>
					{"        "}
				</StackItem>
				<StackItem width="55%" display="flex" nout-width="100%">
					<Override slot="StackItemContent" flex-direction="column" nout-align-items="flex-end" />
					{"        "}
					<Image
						width="100%"
						src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/vectorpaint%20(1).svg?v=2021-01-25T11:01:19.138Z"
						margin="-28px -2px 0px 0px"
						object-position="50% 49%"
						nout-width="70%"
						nout-margin="0px -2px 0px 0px"
						display="none"
					/>
					<Text
						color="#ffffff"
						font="1000 28vw/0.6 'AvenirNextCyrBold', sans-serif"
						margin="-10px 0px 50px 10px"
						width="100%"
						text-align="right"
						nout-margin="10px 0px 50px 20px"
						nout-font="1000 33vw/0.6 'AvenirNextCyrBold', sans-serif"
					>
						123
					</Text>
					<Box
						padding="0 14% 0 14%"
						margin="40px 0px 0px 0px"
						nout-width="55%"
						nout-display="flex"
						nout-flex-direction="column"
						nout-align-items="flex-start"
						nout-justify-content="flex-start"
						nout-padding="0 5% 0 5%"
						nout-margin="40px 0px 20px 0px"
					>
						<Text
							margin="0px 0px 17px 0px"
							color="#ffffff"
							font="bold 24px/30px 'AvenirNextCyrRegular', sans-serif"
							padding="0 0px 0 0px"
							nout-font="bold 21px/30px 'AvenirNextCyrRegular', sans-serif"
						>
							и более сотрудников успешно работают и отдыхают с нами на протяжении тринадцати лет и не жалеют об этом
						</Text>
						<Text margin="0px 0px 10px 0px" color="#ffffff" font="--lead" nout-font="normal 400 16px/24px 'AvenirNextCyrRegular', sans-serif">
							Мы верим, что в мире есть масса возможностей заниматься тем, что по‑настоящему нравится, и точно знаем, что это можно делать у нас в компании.{" "}
						</Text>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Components.PopUp
				left="-30px"
				bottom="auto"
				right="auto"
				top="40%"
				transition="all 0.5s ease 0s"
			>
				<Override
					slot="button"
					color="#263238"
					font="normal 500 20px/1.5 'AvenirNextCyrMedium', sans-serif"
					letter-spacing=".1px"
					background="#ffe02d"
					padding="30px 55px 24px 66px"
					position="absolute"
					transition="all 0.5s ease 0s"
					left="-30px"
					bottom="auto"
					right="auto"
					top="40%"
					hover-left="0px"
				>
					<Box padding="0 0% 0 0%" display="flex" flex-direction="column" align-items="flex-start">
						Присоединяйся к нам!
						<Box padding="0 0% 0 0%" display="flex" align-items="center">
							<Text margin="0px 8px 0px 0px" font="500 16px/30px 'AvenirNextCyrMedium', sans-serif" letter-spacing=".5px">
								Отправить резюме
							</Text>
							<Image width="31px" height="12px" src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/arrowpop.svg?v=2021-01-26T22:37:32.256Z" />
						</Box>
					</Box>
				</Override>
				<Override
					slot="wrapper"
					background="#ffffff"
					max-width="672px"
					width="100%"
					margin="0px 0px 0px 0px"
					padding="0px 0px 0px 0px"
					border-radius="0px"
					overflow-y="scroll"
					height="100%"
					max-height="1150px"
				/>
				<Override
					slot="close"
					color="#c5cfdb"
					padding="0.7rem 0.7rem .5rem .5rem"
					size="20px"
					hover-color="#333"
					transition="color 0.3s ease 0s"
				/>
				<Override slot="content" margin="25px 0px 0px 0px" />
				<Section padding="0px 0 40px 0">
					<Override slot="SectionContent" align-items="center" width="100%" />
					<Components.EmbedHTML width="100%" />
				</Section>
			</Components.PopUp>
			<Stack margin="0px 0px 0px 0px" max-width="750px" width="100%" gap="16px">
				{"    "}
				<StackItem width="25%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" />
					{"        "}
					<Link
						href="/vacancies/#msk"
						text-decoration-line="initial"
						color="#ffd83a"
						font="normal 600 18px/24px 'AvenirNextCyrRegular', sans-serif"
						hover-color="#ffffff"
						transition="all 0.2s linear 0s"
					>
						Москва
						<br />
						<Span
							color="#ffffff"
							font="600 12px/24px AvenirNextCyrRegular, sans-serif"
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							1 вакансия
						</Span>
					</Link>
					{"    "}
				</StackItem>
				<StackItem width="25%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" />
					{"        "}
					<Link
						href="/vacancies/#spb"
						text-decoration-line="initial"
						color="#ffd83a"
						font="normal 600 18px/24px 'AvenirNextCyrRegular', sans-serif"
						hover-color="#ffffff"
						transition="all 0.2s linear 0s"
					>
						Санкт-Петербург
						<br />
						<Span
							color="#ffffff"
							font="600 12px/24px AvenirNextCyrRegular, sans-serif"
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							4 вакансия
						</Span>
					</Link>
					{"    "}
				</StackItem>
				<StackItem width="25%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" />
					{"        "}
					<Link
						href="/vacancies/#rnd"
						text-decoration-line="initial"
						color="#ffd83a"
						font="normal 600 18px/24px 'AvenirNextCyrRegular', sans-serif"
						hover-color="#ffffff"
						transition="all 0.2s linear 0s"
					>
						Ростов-на-Дону
						<br />
						<Span
							color="#ffffff"
							font="600 12px/24px AvenirNextCyrRegular, sans-serif"
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							5 вакансия
						</Span>
					</Link>
					{"    "}
				</StackItem>
				<StackItem width="25%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" />
					{"        "}
					<Link
						href="/vacancies/#fl"
						text-decoration-line="initial"
						color="#ffd83a"
						font="normal 600 18px/24px 'AvenirNextCyrRegular', sans-serif"
						hover-color="#ffffff"
						transition="all 0.2s linear 0s"
					>
						Удаленная работа
						<br />
						<Span
							color="#ffffff"
							font="600 12px/24px AvenirNextCyrRegular, sans-serif"
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							3 вакансия
						</Span>
					</Link>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack margin="0px 0px 0px 0px" nout-display="none">
				{"    "}
				<StackItem width="100%" display="flex">
					{"        "}
					<Link href="#header">
						<Image width="32px" height="53px" src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/vectorpaint%20(2).svg?v=2021-01-25T11:04:32.639Z" />
					</Link>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section
			id="header"
			quarkly-title="Header"
			padding="0px 0px 0px 0px"
			border-width="0px 0px 2px 0px"
			border-style="solid"
			border-color="#dbe6f4"
			transition="all 400ms ease 0s"
			nout-border-radius="6px"
			lg-position="fixed"
			background="#ffffff"
		>
			<Override slot="SectionContent" max-width="none" width="100%" />
			<Stack margin="0px 0px 0px 0px" gap="0px">
				<StackItem
					width="50%"
					display="flex"
					nout-width="70%"
					lg-width="70%"
					sm-width="85%"
				>
					<Override slot="StackItemContent" align-items="flex-start" padding="15px 30px 13px 30px" />
					{"        "}
					<Box display="flex" align-items="center">
						<Link href="/">
							<Image
								src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/logoblue.svg?v=2021-01-25T20:59:50.954Z"
								color="#ffffff"
								width="50px"
								height="50px"
								margin="3px 10px 3px 3px"
								padding="0px 0px 0px 0px"
							/>
						</Link>
						<Text font="normal 600 18px/50px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 0px 0px" display="inline-block" color="#ffffff">
							<Link href="https://ru.uteam.pro/" color="#000000" text-decoration-line="initial" font="500 18px/50px 'AvenirNextCyrMedium', sans-serif">
								Вакансии в России
							</Link>
						</Text>
						<Text
							font="normal 300 14px/19px 'AvenirNextCyrMedium', sans-serif"
							margin="3px 0px 0px 12px"
							display="none"
							color="#9BABBF"
							nout-display="none"
						>
							<Link
								href="http://ua.uteam.pro/"
								color="#9BABBF"
								text-decoration-line="initial"
								hover-color="#ffe02d"
								transition="color 0.2s ease 0s"
							>
								Вакансії в Україні{" "}
							</Link>
						</Text>
						<Text
							font="normal 300 14px/19px 'AvenirNextCyrMedium', sans-serif"
							margin="3px 0px 0px 12px"
							display="inline-block"
							color="#9BABBF"
							nout-display="none"
						>
							<Link
								href="http://en.uteam.pro/"
								color="#9BABBF"
								text-decoration-line="initial"
								hover-color="#ffe02d"
								transition="color 0.2s ease 0s"
							>
								Applying from overseas
							</Link>
						</Text>
					</Box>
				</StackItem>
				<StackItem
					width="50%"
					display="flex"
					nout-width="30%"
					lg-width="30%"
					sm-width="15%"
				>
					<Override slot="StackItemContent" align-items="center" padding="15px 30px 13px 30px" justify-content="flex-end" />
					<Components.MobileSide
						flex="1 0 auto"
						nout-position="relative"
						nout-z-index="3"
						nout-display="flex"
						nout-justify-content="flex-end"
						nout-align-items="center"
						display="none"
						nout-top="0px"
					>
						<Override
							slot="Content"
							display="flex"
							align-items="center"
							nout-position="fixed"
							nout-top={0}
							nout-left={0}
							nout-z-index="1"
							nout-width="100%"
							nout-height="100%"
							nout-background="white"
							nout-flex-direction="column"
						/>
						<Override
							slot="Button"
							display="none"
							nout-display="flex"
							nout-width="33px"
							nout-height="28px"
							nout-z-index="6"
							nout-top="35px"
							sm-margin="-3px 0px 0px 0px"
							nout-cursor="pointer"
						/>
						<Override
							slot="Button Line"
							nout-background="black"
							nout-min-height="3px"
							border-radius="6px"
							nout-position="absolute"
						/>
						<Override
							slot="Button Line1"
							nout-top="4px"
							border-radius="6px"
							nout-width="22px"
							nout-right="0px"
						/>
						<Override slot="Button Line2" nout-top="11px" nout-border-radius="6px" nout-right="0px" />
						<Override slot="Button Line3" nout-top="18px" nout-border-radius="6px" nout-right="0px" />
						<Override slot="Button Line1 :closed" nout-width="22px" />
						<Override slot="Button Line2 :closed" nout-width="22px" />
						<Override slot="Button Line3 :closed" nout-width="22px" />
						<Override slot="Button Line2 :open" nout-opacity="0" nout-width="32px" />
						<Override slot="Button Line1 :open" nout-width="36px" nout-transform="translateY(12px) rotate(225deg)" />
						<Override slot="Button Line3 :open" nout-width="36px" nout-transform="translateY(-12px) rotate(135deg)" />
						<Override slot="Content :closed" nout-opacity="0" nout-transition="transform --transitionDuration-normal step-end 0s,opacity --transitionDuration-normal --transitionTimingFunction-easeOut" nout-transform="translateY(-100%)" />
						<Override slot="Content :open" nout-transform="translateY(0%)" nout-transition="transform --transitionDuration-normal step-start 0s,opacity --transitionDuration-normal --transitionTimingFunction-easeOut" nout-opacity="1" />
						<Override slot="Button :open" nout-position="fixed" />
						<Box
							nout-width="100%"
							nout-display="flex"
							nout-align-items="center"
							nout-padding="0px 0px 0px 0px"
							nout-margin="0px 0px 0px 33px"
						>
							<Image
								width="64px"
								height="64px"
								nout-width="50px"
								nout-height="50px"
								src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/logoblue.svg?v=2021-01-25T20:59:50.954Z"
							/>
							<Text
								flex="0 0 auto"
								margin="0px 0px 0px 0px"
								font="--headline3"
								nout-z-index="6"
								display="none"
								nout-display="block"
								nout-width="90%"
								nout-margin="24px 0px 24px 12px"
								nout-font="normal 500 18px/42px 'AvenirNextCyrMedium', sans-serif"
							>
								Вакансии в России
							</Text>
						</Box>
						<Menu
							flex="1 1 auto"
							display="flex"
							align-items="center"
							justify-content="center"
							nout-flex="0 1 auto"
							nout-flex-direction="column"
							nout-padding="6px 6px 0px 6px"
							nout-margin="15px 0px 0px 0px"
						>
							<Override slot="item-404" display="none" />
							<Override slot="item-index" display="none" nout-display="block" />
							<Override
								slot="link"
								nout-text-decoration-line="initial"
								nout-font="18px AvenirNextCyrRegular, sans-serif"
								nout-letter-spacing=".2px"
								nout-padding="0px 0px 0px 0px"
								nout-color="#263238"
							/>
							<Override slot="item" nout-padding="15px 25px 15px 25px" />
							<Override slot="link-index">
								Главная
							</Override>
							<Override slot="link-active" nout-color="#FFE02D" nout-cursor="default" />
						</Menu>
						<StackItem width="70%" display="flex" lg-width="100%" nout-width="100%">
							<Override
								slot="StackItemContent"
								align-items="flex-end"
								padding="13px 30px 14px 30px"
								nout-flex-direction="column"
								nout-justify-content="center"
								nout-align-items="center"
								nout-padding="0px 30px 0px 30px"
							/>
							{"        "}
							<Text
								font="normal 300 14px/19px 'AvenirNextCyrMedium', sans-serif"
								margin="3px 0px 0px 22px"
								display="inline-block"
								color="#9BABBF"
								lg-margin="10px 0px 0px 22px"
								nout-padding="15px 25px 15px 25px"
								nout-margin="0px 0px 0px 0px"
							>
								<Link
									href="http://en.uteam.pro/"
									color="#4a8cfa"
									text-decoration-line="initial"
									hover-color="#3d72cc"
									transition="color 0.2s ease 0s"
									font="300 14px/19px 'AvenirNextCyrMedium'"
									lg-padding="0px 0px 0px 0px"
									lg-margin="0px 0px 0px 0px"
									nout-font="18px AvenirNextCyrRegular, sans-serif"
									nout-padding="0px 0px 0px 0px"
								>
									Applying from overseas
								</Link>
							</Text>
							<Text
								font="normal 300 14px/19px 'AvenirNextCyrMedium', sans-serif"
								margin="3px 0px 0px 22px"
								display="inline-block"
								color="#9BABBF"
								lg-margin="10px 0px 0px 22px"
								nout-margin="0px 0px 0px 0px"
								nout-padding="15px 25px 15px 25px"
								nout-display="none"
							>
								<Link
									href="http://ua.uteam.pro/"
									color="#4a8cfa"
									text-decoration-line="initial"
									hover-color="#3d72cc"
									transition="color 0.2s ease 0s"
									font="300 14px/19px 'AvenirNextCyrMedium'"
									lg-padding="0px 0px 0px 0px"
									lg-margin="0px 0px 0px 0px"
									nout-font="18px AvenirNextCyrRegular, sans-serif"
								>
									Вакансії в Україні{" "}
								</Link>
							</Text>
						</StackItem>
						<StackItem width="30%" display="flex" lg-width="100%" nout-width="100%">
							<Override
								slot="StackItemContent"
								align-items="center"
								padding="13px 30px 14px 30px"
								justify-content="flex-end"
								lg-justify-content="center"
								nout-justify-content="center"
								nout-margin="10px 0px 0px 0px"
							/>
							<Link
								href="https://www.facebook.com/ucoz"
								target="_blank"
								margin="0px 15px 0px 0px"
								border-color="#AFC1D8"
								color="#AFC1D8"
								border-radius="50%"
								border-width="2px"
								border-style="solid"
								hover-background="#4a8cfa"
								hover-color="#ffffff"
								hover-border-color="#4a8cfa"
							>
								<Icon
									category="fa"
									icon={FaVk}
									border-radius="50%"
									padding="5px 5px 5px 5px"
									transition="all 0.2s linear 0s"
									size="20px"
									hover-color="inherit"
									color="inherit"
								/>
							</Link>
							<Link
								href="https://www.facebook.com/ucoz"
								target="_blank"
								margin="0px 15px 0px 0px"
								border-color="#AFC1D8"
								color="#AFC1D8"
								border-radius="50%"
								border-width="2px"
								border-style="solid"
								hover-background="#4a8cfa"
								hover-color="#ffffff"
								hover-border-color="#4a8cfa"
							>
								<Icon
									category="fa"
									icon={FaFacebookF}
									border-radius="50%"
									padding="5px 5px 5px 5px"
									transition="all 0.2s linear 0s"
									size="20px"
									hover-color="inherit"
									color="inherit"
								/>
							</Link>
							<Link
								href="https://twitter.com/ucoz_ru"
								target="_blank"
								margin="0px 15px 0px 0px"
								border-color="#AFC1D8"
								color="#AFC1D8"
								border-radius="50%"
								border-width="2px"
								border-style="solid"
								hover-background="#4a8cfa"
								hover-color="#ffffff"
								hover-border-color="#4a8cfa"
							>
								<Icon
									category="fa"
									icon={FaTwitter}
									border-radius="50%"
									padding="5px 5px 5px 5px"
									transition="all 0.2s linear 0s"
									size="20px"
									hover-color="inherit"
									color="inherit"
								/>
							</Link>
							<Link
								href="https://instagram.com/ucoz_ru"
								target="_blank"
								margin="0px 15px 0px 0px"
								border-color="#AFC1D8"
								color="#AFC1D8"
								border-radius="50%"
								border-width="2px"
								border-style="solid"
								hover-background="#4a8cfa"
								hover-color="#ffffff"
								hover-border-color="#4a8cfa"
							>
								<Icon
									category="fa"
									icon={FaInstagram}
									border-radius="50%"
									padding="5px 5px 5px 5px"
									transition="all 0.2s linear 0s"
									size="20px"
									hover-color="inherit"
									color="inherit"
								/>
							</Link>
							<Link
								href="http://ok.ru/ucozru"
								target="_blank"
								margin="0px 15px 0px 0px"
								border-color="#AFC1D8"
								color="#AFC1D8"
								border-radius="50%"
								border-width="2px"
								border-style="solid"
								hover-background="#4a8cfa"
								hover-color="#ffffff"
								hover-border-color="#4a8cfa"
								nout-margin="0px 0px 0px 0px"
							>
								<Icon
									category="fa"
									icon={FaOdnoklassniki}
									border-radius="50%"
									padding="5px 5px 5px 5px"
									transition="all 0.2s linear 0s"
									size="20px"
									hover-color="inherit"
									color="inherit"
								/>
							</Link>
							{"        "}
						</StackItem>
					</Components.MobileSide>
					<Menu display="flex" nout-display="none">
						<Override slot="item-404" display="none" />
						<Override slot="link-index" text-decoration-line="initial">
							Главная
						</Override>
						<Override slot="item-active" color="#4a8cfa" />
						<Override slot="link-active" color="#4a8cfa" />
						<Override
							slot="link"
							transition="color 0.3s ease-in-out 0s"
							font="400 16px/24px 'AvenirNextCyrMedium'"
							text-decoration-line="initial"
							color="#263238"
							hover-color="#4a8cfa"
						/>
						<Override slot="link-uteam">
							Команда
						</Override>
					</Menu>
					{"        "}
				</StackItem>
				{"        "}
			</Stack>
		</Section>
		<Section padding="60px 0 100px 0" sm-padding="110px 0 60px 0" lg-padding="120px 0 80px 0">
			<Override slot="SectionContent" align-items="center" />
			<Stack margin="0px 0px 0px 0px" max-width="850px">
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					{"        "}
					<Text
						font="--headline3"
						margin="0px 0px 70px 0px"
						display="inline-block"
						sm-text-align="center"
						sm-margin="0px 0px 30px 0px"
					>
						Работай с комфортом!
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="33.3333%" display="flex" sm-width="50%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" flex-direction="column" />
					{"        "}
					<Image width="74px" height="70px" src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/icon1.svg?v=2021-01-27T14:59:58.221Z" />
					<Text
						font="normal 500 15px/18px 'AvenirNextCyrMedium'"
						margin="23px 0px 70px 0px"
						display="inline-block"
						padding="0px 0px 0px 0px"
						text-align="center"
						color="#263238"
						sm-margin="23px 0px 20px 0px"
					>
						Гибкий график
						<br />
						работы
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" sm-width="50%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" flex-direction="column" />
					{"        "}
					<Image width="74px" height="70px" src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/icon2.svg?v=2021-01-27T14:59:58.219Z" />
					<Text
						font="normal 500 15px/18px 'AvenirNextCyrMedium'"
						margin="23px 0px 70px 0px"
						display="inline-block"
						padding="0px 0px 0px 0px"
						text-align="center"
						color="#263238"
						sm-margin="23px 0px 20px 0px"
					>
						Профессиональное
						<br />
						развитие и
						<br />
						обучение
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" sm-width="50%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" flex-direction="column" />
					{"        "}
					<Image width="74px" height="70px" src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/icon3.svg?v=2021-01-27T14:59:58.223Z" />
					<Text
						font="normal 500 15px/18px 'AvenirNextCyrMedium'"
						margin="23px 0px 70px 0px"
						display="inline-block"
						padding="0px 0px 0px 0px"
						text-align="center"
						color="#263238"
						sm-margin="23px 0px 20px 0px"
					>
						Социальные
						<br />
						гарантии, ДМС
						<br />
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" sm-width="50%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" flex-direction="column" />
					{"        "}
					<Image width="74px" height="70px" src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/icon4.svg?v=2021-01-27T14:59:58.223Z" />
					<Text
						font="normal 500 15px/18px 'AvenirNextCyrMedium'"
						margin="23px 0px 0px 0px"
						display="inline-block"
						padding="0px 0px 0px 0px"
						text-align="center"
						color="#263238"
					>
						Совместный отдых
						<br />
						и корпоративные
						<br />
						мероприятия
						<br />
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" sm-width="50%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" flex-direction="column" />
					{"        "}
					<Image width="74px" height="70px" src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/work.svg?v=2021-02-08T10:30:40.438Z" />
					<Text
						font="normal 500 15px/18px 'AvenirNextCyrMedium'"
						margin="23px 0px 0px 0px"
						display="inline-block"
						padding="0px 0px 0px 0px"
						text-align="center"
						color="#263238"
					>
						Комфортные
						<br />
						условия работы
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" sm-width="50%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" flex-direction="column" />
					{"        "}
					<Image width="74px" height="70px" src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/icon6.svg?v=2021-01-27T14:59:58.226Z" />
					<Text
						font="normal 500 15px/18px 'AvenirNextCyrMedium'"
						margin="23px 0px 0px 0px"
						display="inline-block"
						padding="0px 0px 0px 0px"
						text-align="center"
						color="#263238"
					>
						Бесплатное питание
						<br />
						в офисе
						<br />
					</Text>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section padding="24px 0 38px 0" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/Photo2.jpg?v=2021-02-16T10:29:31.547Z) center/cover no-repeat fixed padding-box">
			<Override slot="SectionContent" align-items="center" />
			<Stack margin="0px 0px 0px 0px" width="100%" max-width="750px" gap="--cmp-stack-gap-small">
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" color="#ffffff" />
					{"        "}
					<Text font="--headline3" margin="0px 0px 0px -3px" display="inline-block" text-align="left">
						Вакансии
						<br />
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack margin="0px 0px 0px 0px" max-width="750px" width="100%" gap="--cmp-stack-gap-small">
				{"    "}
				<StackItem width="25%" display="flex" sm-width="100%" md-width="50%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" />
					{"        "}
					<Link
						href="/vacancies/#msk"
						text-decoration-line="initial"
						color="#ffd83a"
						font="normal 600 18px/24px 'AvenirNextCyrRegular', sans-serif"
						hover-color="#ffffff"
						transition="all 0.2s linear 0s"
					>
						Москва
						<br />
						<Span
							color="#ffffff"
							font="600 12px/24px AvenirNextCyrRegular, sans-serif"
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							1 вакансия
						</Span>
					</Link>
					{"    "}
				</StackItem>
				<StackItem width="25%" display="flex" sm-width="100%" md-width="50%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" />
					{"        "}
					<Link
						href="/vacancies/#spb"
						text-decoration-line="initial"
						color="#ffd83a"
						font="normal 600 18px/24px 'AvenirNextCyrRegular', sans-serif"
						hover-color="#ffffff"
						transition="all 0.2s linear 0s"
					>
						Санкт-Петербург
						<br />
						<Span
							color="#ffffff"
							font="600 12px/24px AvenirNextCyrRegular, sans-serif"
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							4 вакансия
						</Span>
					</Link>
					{"    "}
				</StackItem>
				<StackItem width="25%" display="flex" sm-width="100%" md-width="50%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" />
					{"        "}
					<Link
						href="/vacancies/#rnd"
						text-decoration-line="initial"
						color="#ffd83a"
						font="normal 600 18px/24px 'AvenirNextCyrRegular', sans-serif"
						hover-color="#ffffff"
						transition="all 0.2s linear 0s"
					>
						Ростов-на-Дону
						<br />
						<Span
							color="#ffffff"
							font="600 12px/24px AvenirNextCyrRegular, sans-serif"
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							5 вакансия
						</Span>
					</Link>
					{"    "}
				</StackItem>
				<StackItem width="25%" display="flex" sm-width="100%" md-width="50%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" />
					{"        "}
					<Link
						href="/vacancies/#fl"
						text-decoration-line="initial"
						color="#ffd83a"
						font="normal 600 18px/24px 'AvenirNextCyrRegular', sans-serif"
						hover-color="#ffffff"
						transition="all 0.2s linear 0s"
					>
						Удаленная работа
						<br />
						<Span
							color="#ffffff"
							font="600 12px/24px AvenirNextCyrRegular, sans-serif"
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							3 вакансия
						</Span>
					</Link>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="60px 0 80px 0" sm-padding="30px 0 40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Stack margin="0px 0px 0px 0px" max-width="900px" width="100%">
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					{"        "}
					<Text font="--headline3" margin="0px 0px 40px 0px" display="inline-block" text-align="center">
						Команда uTeam
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="25%" display="flex" md-width="50%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" flex-direction="column" />
					{"        "}
					<Image src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/laurel.svg?v=2021-01-26T17:35:48.102Z" />
					<Text
						font="normal 500 15px/18px 'AvenirNextCyrMedium'"
						margin="23px 0px 0px 0px"
						display="inline-block"
						padding="0px 0px 0px 0px"
						text-align="center"
						color="#263238"
					>
						Лауреат
						<br />
						«Премии Рунета»
						<br />
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="25%" display="flex" md-width="50%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" flex-direction="column" />
					{"        "}
					<Image src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/laurel.svg?v=2021-01-26T17:35:48.102Z" />
					<Text
						font="normal 500 15px/18px 'AvenirNextCyrMedium'"
						margin="23px 0px 0px 0px"
						display="inline-block"
						padding="0px 0px 0px 0px"
						text-align="center"
						color="#263238"
					>
						Лучший
						<br />
						корпоративный сайт
						<br />
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="25%" display="flex" md-width="50%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" flex-direction="column" />
					{"        "}
					<Image src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/laurel.svg?v=2021-01-26T17:35:48.102Z" />
					<Text
						font="normal 500 15px/18px 'AvenirNextCyrMedium'"
						margin="23px 0px 0px 0px"
						display="inline-block"
						padding="0px 0px 0px 0px"
						text-align="center"
						color="#263238"
					>
						III место
						<br />
						в «Народной десятке»
						<br />
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="25%" display="flex" md-width="50%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" flex-direction="column" />
					{"        "}
					<Image src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/laurel.svg?v=2021-01-26T17:35:48.102Z" />
					<Text
						font="normal 500 15px/18px 'AvenirNextCyrMedium'"
						margin="23px 0px 0px 0px"
						display="inline-block"
						padding="0px 0px 0px 0px"
						text-align="center"
						color="#263238"
					>
						Победитель
						<br />
						Open Web Awards
						<br />
					</Text>
					{"    "}
				</StackItem>
			</Stack>
			<Stack margin="10px 0px 0px 0px" max-width="900px" width="100%">
				{"        "}
				<StackItem width="33.33%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" flex-direction="column" />
					{"        "}
					<Text
						font="normal 500 15px/18px 'AvenirNextCyrMedium'"
						margin="23px 0px 0px 0px"
						display="inline-block"
						padding="0px 0px 0px 0px"
						text-align="center"
						color="#263238"
					>
						<Strong
							font="normal bold 48px/42px 'AvenirNextCyrRegular', sans-serif"
							color="#4a8cfa"
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							15
						</Strong>
					</Text>
					<Text
						font="normal 500 15px/18px 'AvenirNextCyrMedium'"
						margin="23px 0px 0px 0px"
						display="inline-block"
						padding="0px 0px 0px 0px"
						text-align="center"
						color="#263238"
					>
						лет стабильной
						<br />
						работы крупнейшего
						<br />
						сервиса Рунета
						<br />
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="33.33%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" flex-direction="column" />
					{"        "}
					<Text
						font="normal 500 15px/18px 'AvenirNextCyrMedium'"
						margin="23px 0px 0px 0px"
						display="inline-block"
						padding="0px 0px 0px 0px"
						text-align="center"
						color="#263238"
					>
						<Strong
							font="normal bold 48px/42px 'AvenirNextCyrRegular', sans-serif"
							color="#4a8cfa"
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							120+
						</Strong>
					</Text>
					<Text
						font="normal 500 15px/18px 'AvenirNextCyrMedium'"
						margin="23px 0px 0px 0px"
						display="inline-block"
						padding="0px 0px 0px 0px"
						text-align="center"
						color="#263238"
					>
						молодых
						<br />
						и целеустремленных
						<br />
						сотрудников
						<br />
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="33.33%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" flex-direction="column" />
					{"        "}
					<Text
						font="normal 500 15px/18px 'AvenirNextCyrMedium'"
						margin="23px 0px 0px 0px"
						display="inline-block"
						padding="0px 0px 0px 0px"
						text-align="center"
						color="#263238"
					>
						<Strong
							font="normal bold 48px/42px 'AvenirNextCyrRegular', sans-serif"
							color="#4a8cfa"
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							5
						</Strong>
						{" "}
					</Text>
					<Text
						font="normal 500 15px/18px 'AvenirNextCyrMedium'"
						margin="23px 0px 0px 0px"
						display="inline-block"
						padding="0px 0px 0px 0px"
						text-align="center"
						color="#263238"
					>
						комфортных офисов
						<br />
						в 4-х городах
						<br />
						России и Украины
						<br />
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" flex-direction="column" />
					{"        "}
					<Link
						href="/resume"
						text-align="center"
						text-decoration-line="initial"
						color="#ffffff"
						background="#4a8cfa"
						padding="14px 15px 15px 15px"
						font="600 16px 'AvenirNextCyrRegular', sans-serif"
						border-radius="5px"
						transition="all 0.2s linear 0s"
						margin="40px 0px 0px 0px"
						hover-background="#437de0"
					>
						Как попасть в команду
					</Link>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Components.Footer>
			<Override slot="text2" />
		</Components.Footer>
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
		<RawHtml>
			<style place={"endOfHead"} rawKey={"601c3c7d7571e39a08c18a0b"}>
				{"* {\n  scroll-behavior: smooth;\n  }\n  .active .fileText {\n  display: none;\n  }\n  input.fileText {\n      opacity: 1 !important;\n  }\n  * {\n    -webkit-tap-highlight-color: transparent!important;\n  }\n  @font-face {\n    font-family: 'AvenirNextCyrRegular';\n    src: url('/fonts/AvenirNextCyr-Regular.eot');\n    src: url('/fonts/AvenirNextCyr-Regular.eot?#iefix') format('embedded-opentype'), url('/fonts/AvenirNextCyr-Regular.woff') format('woff'), url('/fonts/AvenirNextCyr-Regular.ttf') format('truetype');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n  }\n  @font-face {\n    font-family: 'AvenirNextCyrMedium';\n    src: url('/fonts/AvenirNextCyr-Medium.eot');\n    src: url('/fonts/AvenirNextCyr-Medium.eot?#iefix') format('embedded-opentype'), url('/fonts/AvenirNextCyr-Medium.woff') format('woff'), url('/fonts/AvenirNextCyr-Medium.ttf') format('truetype');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n  }\n  @font-face {\n    font-family: 'AvenirNextCyrBold';\n    src: url('/fonts/AvenirNextCyr-Bold.eot');\n    src: url('/fonts/AvenirNextCyr-Bold.eot?#iefix') format('embedded-opentype'), url('/fonts/AvenirNextCyr-Bold.woff') format('woff'), url('/fonts/AvenirNextCyr-Bold.ttf') format('truetype');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n  }\n  @font-face {\n    font-family: 'AvenirNextCyrDemi';\n    src: url('/fonts/AvenirNextCyr-Demi.otf');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n  }\n  body {\n    font-family: 'AvenirNextCyrRegular', sans-serif;\n    font-weight: normal;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n:focus {\n  outline: none;\n}"}
			</style>
			<link
				href={"/nubexPrint.css"}
				media={"print"}
				type={"text/css"}
				rel={"stylesheet"}
				place={"endOfHead"}
				rawKey={"601c3cb7f03035695e1bad36"}
			/>
		</RawHtml>
	</Theme>;
});