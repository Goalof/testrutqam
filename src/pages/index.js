import React from "react";
import theme from "theme";
import { Theme, Image, Link, Text, Box, Icon, Section, Span, Strong } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Menu, Stack } from "@quarkly/components";
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
				position="relative"
				nout-justify-content="flex-start"
				max-width="none"
				width="100%"
				justify-content="space-between"
				align-items="center"
				padding="0px 0px 8px 0px"
			/>
			<Stack margin="0px 0px 0px 0px" gap="0px" width="100%">
				{"    "}
				<StackItem display="flex" nout-width="70%" width="45%">
					<Override slot="StackItemContent" align-items="flex-start" padding="15px 0px 0px 30px" />
					{"        "}
					<Box display="flex" align-items="center">
						<Link href="/">
							<Image
								height="50px"
								margin="3px 10px 3px 3px"
								padding="0px 0px 0px 0px"
								src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/logowhite.svg?v=2021-01-26T19:12:20.383Z"
								color="#ffffff"
								width="50px"
							/>
						</Link>
						<Text color="#ffffff" font="normal 500 18px/50px 'AvenirNextCyrMedium', sans-serif" margin="0px 0px 0px 0px" display="inline-block">
							<Link color="#ffffff" text-decoration-line="initial" font="500 18px/50px " href="https://ru.uteam.pro/">
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
								transition="color 0.2s ease 0s"
								href="http://ua.uteam.pro/"
								color="#ffffff"
								text-decoration-line="initial"
								hover-color="#ffe02d"
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
					display="none"
					nout-width="30%"
					lg-width="30%"
					sm-width="15%"
					nout-display="block"
					width="50%"
				>
					<Override slot="StackItemContent" align-items="center" padding="15px 30px 13px 30px" justify-content="flex-end" />
					<Components.MobileSide2
						nout-z-index="0"
						flex="1 0 auto"
						nout-align-items="center"
						nout-display="flex"
						nout-justify-content="flex-end"
						nout-position="relative"
						nout-top="0px"
					>
						<Override
							slot="Content2"
							align-items="center"
							nout-position="fixed"
							nout-top={0}
							nout-left={0}
							nout-width="100%"
							nout-height="100%"
							nout-flex-direction="column"
							display="flex"
							nout-z-index="5"
							nout-background="white"
						/>
						<Override
							slot="Button Liner3"
							nout-background="#ffffff"
							nout-top="18px"
							nout-border-radius="6px"
							nout-right="0px"
						/>
						<Override slot="Button Liner1 :closed" nout-width="22px" nout-background="#ffffff" />
						<Override
							slot="Button2"
							nout-cursor="pointer"
							display="none"
							nout-display="flex"
							nout-width="33px"
							nout-height="28px"
							nout-z-index="6"
							nout-top="35px"
							sm-margin="-3px 0px 0px 0px"
						/>
						<Override slot="Button Liner2 :closed" nout-width="22px" nout-background="#ffffff" />
						<Override slot="Button Liner2 :open" nout-opacity="0" nout-width="32px" />
						<Override slot="Button Liner3 :open" nout-width="36px" nout-transform="translateY(-12px) rotate(135deg)" nout-background="#000000" />
						<Override
							slot="Button Liner"
							nout-min-height="3px"
							border-radius="6px"
							nout-position="absolute"
							min-height={0}
							min-width={0}
							nout-background="#ffffff"
						/>
						<Override slot="Button Liner3 :closed" nout-width="22px" />
						<Override slot="Content2 :closed" nout-opacity="0" nout-transition="transform --transitionDuration-normal step-end 0s,opacity --transitionDuration-normal --transitionTimingFunction-easeOut" nout-transform="translateY(-100%)" />
						<Override slot="Content2 :open" nout-transform="translateY(0%)" nout-transition="transform --transitionDuration-normal step-start 0s,opacity --transitionDuration-normal --transitionTimingFunction-easeOut" nout-opacity="1" />
						<Override
							slot="Button Liner1"
							nout-top="4px"
							border-radius="6px"
							nout-width="22px"
							nout-right="0px"
						/>
						<Override slot="Button Liner2" nout-top="11px" nout-border-radius="6px" nout-right="0px" />
						<Override slot="Button Liner1 :open" nout-background="--color-dark" nout-width="36px" nout-transform="translateY(12px) rotate(225deg)" />
						<Override slot="Button2 :open" nout-position="fixed" />
						<Box
							nout-width="100%"
							nout-display="flex"
							nout-align-items="center"
							nout-padding="0px 0px 0px 0px"
							nout-margin="0px 0px 0px 33px"
						>
							<Image
								nout-width="50px"
								nout-height="50px"
								src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/logoblue.svg?v=2021-01-25T20:59:50.954Z"
								width="64px"
								height="64px"
							/>
							<Text
								flex="0 0 auto"
								display="none"
								nout-margin="24px 0px 24px 12px"
								nout-font="normal 500 18px/42px 'AvenirNextCyrMedium', sans-serif"
								nout-width="90%"
								margin="0px 0px 0px 0px"
								font="--headline3"
								nout-z-index="6"
								nout-display="block"
							>
								Вакансии в России
							</Text>
						</Box>
						<Menu
							display="flex"
							align-items="center"
							justify-content="center"
							nout-flex="0 1 auto"
							nout-flex-direction="column"
							nout-padding="6px 6px 0px 6px"
							nout-margin="15px 0px 0px 0px"
							flex="1 1 auto"
						>
							<Override slot="item-404" display="none" />
							<Override slot="item-index" display="none" nout-display="block" />
							<Override
								slot="link"
								nout-padding="0px 0px 0px 0px"
								nout-color="#263238"
								nout-text-decoration-line="initial"
								nout-font="18px AvenirNextCyrRegular, sans-serif"
								nout-letter-spacing=".2px"
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
								nout-align-items="center"
								nout-padding="0px 30px 0px 30px"
								align-items="flex-end"
								padding="13px 30px 14px 30px"
								nout-flex-direction="column"
								nout-justify-content="center"
							/>
							{"        "}
							<Text
								nout-padding="15px 25px 15px 25px"
								nout-margin="0px 0px 0px 0px"
								font="normal 300 14px/19px 'AvenirNextCyrMedium', sans-serif"
								margin="3px 0px 0px 22px"
								display="inline-block"
								color="#9BABBF"
								lg-margin="10px 0px 0px 22px"
							>
								<Link
									hover-color="#3d72cc"
									transition="color 0.2s ease 0s"
									font="300 14px/19px 'AvenirNextCyrMedium'"
									lg-margin="0px 0px 0px 0px"
									nout-padding="0px 0px 0px 0px"
									href="http://en.uteam.pro/"
									color="#4a8cfa"
									text-decoration-line="initial"
									lg-padding="0px 0px 0px 0px"
									nout-font="18px AvenirNextCyrRegular, sans-serif"
								>
									Applying from overseas
								</Link>
							</Text>
							<Text
								margin="3px 0px 0px 22px"
								display="inline-block"
								color="#9BABBF"
								lg-margin="10px 0px 0px 22px"
								nout-margin="0px 0px 0px 0px"
								nout-padding="15px 25px 15px 25px"
								nout-display="none"
								font="normal 300 14px/19px 'AvenirNextCyrMedium', sans-serif"
							>
								<Link
									href="http://ua.uteam.pro/"
									hover-color="#3d72cc"
									lg-margin="0px 0px 0px 0px"
									nout-font="18px AvenirNextCyrRegular, sans-serif"
									color="#4a8cfa"
									text-decoration-line="initial"
									transition="color 0.2s ease 0s"
									font="300 14px/19px 'AvenirNextCyrMedium'"
									lg-padding="0px 0px 0px 0px"
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
								margin="0px 15px 0px 0px"
								color="#AFC1D8"
								border-radius="50%"
								border-width="2px"
								hover-background="#4a8cfa"
								hover-color="#ffffff"
								hover-border-color="#4a8cfa"
								href="https://www.facebook.com/ucoz"
								target="_blank"
								border-color="#AFC1D8"
								border-style="solid"
							>
								<Icon
									border-radius="50%"
									padding="5px 5px 5px 5px"
									transition="all 0.2s linear 0s"
									size="20px"
									hover-color="inherit"
									color="inherit"
									category="fa"
									icon={FaVk}
								/>
							</Link>
							<Link
								margin="0px 15px 0px 0px"
								border-radius="50%"
								border-width="2px"
								border-style="solid"
								hover-background="#4a8cfa"
								hover-color="#ffffff"
								hover-border-color="#4a8cfa"
								href="https://www.facebook.com/ucoz"
								target="_blank"
								border-color="#AFC1D8"
								color="#AFC1D8"
							>
								<Icon
									size="20px"
									hover-color="inherit"
									color="inherit"
									category="fa"
									icon={FaFacebookF}
									border-radius="50%"
									padding="5px 5px 5px 5px"
									transition="all 0.2s linear 0s"
								/>
							</Link>
							<Link
								border-style="solid"
								hover-color="#ffffff"
								border-color="#AFC1D8"
								color="#AFC1D8"
								border-radius="50%"
								border-width="2px"
								hover-border-color="#4a8cfa"
								href="https://twitter.com/ucoz_ru"
								target="_blank"
								margin="0px 15px 0px 0px"
								hover-background="#4a8cfa"
							>
								<Icon
									icon={FaTwitter}
									border-radius="50%"
									padding="5px 5px 5px 5px"
									transition="all 0.2s linear 0s"
									size="20px"
									hover-color="inherit"
									color="inherit"
									category="fa"
								/>
							</Link>
							<Link
								border-radius="50%"
								border-width="2px"
								target="_blank"
								margin="0px 15px 0px 0px"
								border-color="#AFC1D8"
								color="#AFC1D8"
								hover-border-color="#4a8cfa"
								href="https://instagram.com/ucoz_ru"
								border-style="solid"
								hover-background="#4a8cfa"
								hover-color="#ffffff"
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
								margin="0px 15px 0px 0px"
								border-style="solid"
								hover-background="#4a8cfa"
								hover-color="#ffffff"
								border-width="2px"
								hover-border-color="#4a8cfa"
								nout-margin="0px 0px 0px 0px"
								href="http://ok.ru/ucozru"
								target="_blank"
								border-color="#AFC1D8"
								color="#AFC1D8"
								border-radius="50%"
							>
								<Icon
									icon={FaOdnoklassniki}
									border-radius="50%"
									padding="5px 5px 5px 5px"
									transition="all 0.2s linear 0s"
									size="20px"
									hover-color="inherit"
									color="inherit"
									category="fa"
								/>
							</Link>
							{"        "}
						</StackItem>
					</Components.MobileSide2>
					<Menu display="flex" nout-display="none">
						<Override
							slot="link"
							font="400 16px/24px 'AvenirNextCyrMedium'"
							text-decoration-line="initial"
							color="#263238"
							hover-color="#4a8cfa"
							transition="color 0.3s ease-in-out 0s"
						/>
						<Override slot="item-404" display="none" />
						<Override slot="link-index" text-decoration-line="initial">
							Главная
						</Override>
						<Override slot="item-active" color="#4a8cfa" />
						<Override slot="link-active" color="#4a8cfa" />
					</Menu>
					{"        "}
				</StackItem>
				<StackItem width="55%" display="flex" nout-width="100%" margin="0px 0px 0px 0px">
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
						font="1000 28vw/0.6 'AvenirNextCyrBold', sans-serif"
						width="100%"
						text-align="right"
						nout-margin="10px 0px 50px 20px"
						top="-10px"
						color="#ffffff"
						margin="0px 0px 50px 10px"
						nout-font="1000 33vw/0.6 'AvenirNextCyrBold', sans-serif"
						right="-50px"
					>
						80
					</Text>
					<Box
						margin="40px 0px 0px 40px"
						nout-display="flex"
						nout-padding="0 5% 0 5%"
						padding="0 14% 0 14%"
						nout-width="55%"
						nout-flex-direction="column"
						nout-align-items="flex-start"
						nout-justify-content="flex-start"
						nout-margin="40px 0px 20px 0px"
					>
						<Text
							nout-font="bold 21px/30px 'AvenirNextCyrRegular', sans-serif"
							margin="0px 0px 17px 0px"
							color="#ffffff"
							font="bold 24px/30px 'AvenirNextCyrRegular', sans-serif"
							padding="0 0px 0 0px"
						>
							и более сотрудников успешно работают и отдыхают с нами на протяжении семнадцати лет и не жалеют об этом
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
					font="normal 500 20px/1.5 'AvenirNextCyrMedium', sans-serif"
					hover-left="0px"
					transition="all 0.5s ease 0s"
					left="-30px"
					bottom="auto"
					color="#263238"
					letter-spacing=".1px"
					background="#ffe02d"
					padding="30px 55px 24px 66px"
					position="absolute"
					right="auto"
					top="40%"
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
					margin="0px 0px 0px 0px"
					border-radius="0px"
					height="100%"
					width="100%"
					padding="0px 0px 0px 0px"
					overflow-y="scroll"
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
				<Components.EmbedJS />
			</Components.PopUp>
			<Stack margin="0px 0px 0px 0px" max-width="750px" width="100%" gap="16px">
				{"    "}
				<StackItem width="33.333%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" />
					{"        "}
					<Link
						href="/vacancies/#msk"
						text-decoration-line="initial"
						color="#ffd83a"
						font="normal 600 18px/24px 'AvenirNextCyrRegular', sans-serif"
						hover-color="#ffffff"
						transition="color 0.2s linear 0s"
					>
						Баку
						<br />
						<Span
							text-overflow="clip"
							hyphens="manual"
							color="#ffffff"
							font="600 12px/24px AvenirNextCyrRegular, sans-serif"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							user-select="auto"
							pointer-events="auto"
						>
							2 вакансии
						</Span>
					</Link>
					{"    "}
				</StackItem>
				<StackItem display="flex" width="33.333%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" />
					{"        "}
					<Link
						text-decoration-line="initial"
						color="#ffd83a"
						font="normal 600 18px/24px 'AvenirNextCyrRegular', sans-serif"
						hover-color="#ffffff"
						transition="color 0.2s linear 0s"
						href="/vacancies/#rnd"
					>
						Ростов-на-Дону
						<br />
						<Span
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							color="#ffffff"
							font="600 12px/24px AvenirNextCyrRegular, sans-serif"
							overflow-wrap="normal"
							word-break="normal"
							user-select="auto"
							pointer-events="auto"
						>
							3 вакансии
						</Span>
					</Link>
					{"    "}
				</StackItem>
				<StackItem width="33.333%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" />
					{"        "}
					<Link
						color="#ffd83a"
						font="normal 600 18px/24px 'AvenirNextCyrRegular', sans-serif"
						hover-color="#ffffff"
						transition="color 0.2s linear 0s"
						href="/vacancies/#fl"
						text-decoration-line="initial"
					>
						Удаленная работа
						<br />
						<Span
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							color="#ffffff"
							font="600 12px/24px AvenirNextCyrRegular, sans-serif"
							overflow-wrap="normal"
							word-break="normal"
							user-select="auto"
							pointer-events="auto"
						>
							4 вакансии
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
			padding="0px 0px 0px 0px"
			border-width="0px 0px 2px 0px"
			border-color="#dbe6f4"
			transition="all 400ms ease 0s"
			background="#ffffff"
			id="header"
			border-style="solid"
			nout-border-radius="6px"
			lg-position="fixed"
			position="sticky"
			top="0px"
			quarkly-title="Header"
		>
			<Override slot="SectionContent" max-width="none" width="100%" />
			<Stack nout-z-index="1" margin="0px 0px 0px 0px" gap="0px" nout-position="relative">
				<StackItem
					sm-width="70%"
					width="50%"
					display="flex"
					nout-width="70%"
					lg-width="70%"
				>
					<Override slot="StackItemContent" align-items="flex-start" padding="15px 30px 13px 30px" />
					{"        "}
					<Box display="flex" align-items="center" nout-position="relative" nout-z-index="1">
						<Link href="/">
							<Image
								padding="0px 0px 0px 0px"
								src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/logoblue.svg?v=2021-01-25T20:59:50.954Z"
								color="#ffffff"
								width="50px"
								height="50px"
								margin="3px 10px 3px 3px"
							/>
						</Link>
						<Text font="normal 600 18px/50px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 0px 0px" display="inline-block" color="#ffffff">
							<Link text-decoration-line="initial" font="500 18px/50px 'AvenirNextCyrMedium', sans-serif" href="https://ru.uteam.pro/" color="#000000">
								Вакансии в России
							</Link>
						</Text>
						<Text
							nout-display="none"
							font="normal 300 14px/19px 'AvenirNextCyrMedium', sans-serif"
							margin="3px 0px 0px 12px"
							display="none"
							color="#9BABBF"
						>
							<Link
								transition="color 0.2s ease 0s"
								href="http://ua.uteam.pro/"
								color="#9BABBF"
								text-decoration-line="initial"
								hover-color="#ffe02d"
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
					display="flex"
					nout-width="30%"
					lg-width="30%"
					sm-width="30%"
					width="50%"
				>
					<Override slot="StackItemContent" align-items="center" padding="15px 30px 13px 30px" justify-content="flex-end" />
					<Components.MobileSide
						flex="1 0 auto"
						nout-position="relative"
						nout-z-index="3"
						nout-display="flex"
						nout-justify-content="flex-end"
						nout-align-items="center"
						nout-top="0px"
						display="none"
					>
						<Override slot="Button Line2 :open" nout-width="32px" nout-opacity="0" />
						<Override slot="Button Line1 :open" nout-width="36px" nout-transform="translateY(12px) rotate(225deg)" />
						<Override slot="Content :closed" nout-opacity="0" nout-transition="transform --transitionDuration-normal step-end 0s,opacity --transitionDuration-normal --transitionTimingFunction-easeOut" nout-transform="translateY(-100%)" />
						<Override
							slot="Button"
							nout-cursor="pointer"
							display="none"
							nout-display="flex"
							nout-width="33px"
							nout-height="28px"
							nout-z-index="6"
							nout-top="35px"
							sm-margin="-3px 0px 0px 0px"
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
							nout-width="22px"
							nout-right="0px"
							nout-top="4px"
							border-radius="6px"
						/>
						<Override slot="Button Line3" nout-top="18px" nout-border-radius="6px" nout-right="0px" />
						<Override slot="Button Line3 :closed" nout-width="22px" />
						<Override slot="Button :open" nout-position="fixed" />
						<Override
							slot="Content"
							display="flex"
							nout-left={0}
							nout-background="white"
							nout-flex-direction="column"
							align-items="center"
							nout-position="fixed"
							nout-top={0}
							nout-z-index="1"
							nout-width="100%"
							nout-height="100%"
						/>
						<Override slot="Button Line2" nout-top="11px" nout-border-radius="6px" nout-right="0px" />
						<Override slot="Button Line3 :open" nout-width="36px" nout-transform="translateY(-12px) rotate(135deg)" />
						<Override slot="Button Line2 :closed" nout-width="22px" />
						<Override slot="Content :open" nout-transform="translateY(0%)" nout-transition="transform --transitionDuration-normal step-start 0s,opacity --transitionDuration-normal --transitionTimingFunction-easeOut" nout-opacity="1" />
						<Override slot="Button Line1 :closed" nout-width="22px" />
						<Box
							nout-width="100%"
							nout-display="flex"
							nout-align-items="center"
							nout-padding="0px 0px 0px 0px"
							nout-margin="0px 0px 0px 33px"
						>
							<Image
								height="64px"
								nout-width="50px"
								nout-height="50px"
								src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/logoblue.svg?v=2021-01-25T20:59:50.954Z"
								width="64px"
							/>
							<Text
								flex="0 0 auto"
								margin="0px 0px 0px 0px"
								nout-z-index="6"
								display="none"
								nout-width="90%"
								nout-margin="24px 0px 24px 12px"
								font="--headline3"
								nout-display="block"
								nout-font="normal 500 18px/42px 'AvenirNextCyrMedium', sans-serif"
							>
								Вакансии в России
							</Text>
						</Box>
						<Menu
							display="flex"
							align-items="center"
							justify-content="center"
							nout-flex="0 1 auto"
							nout-flex-direction="column"
							nout-padding="6px 6px 0px 6px"
							nout-margin="15px 0px 0px 0px"
							flex="1 1 auto"
						>
							<Override slot="item-index" display="none" nout-display="block" />
							<Override
								slot="link"
								nout-letter-spacing=".2px"
								nout-padding="0px 0px 0px 0px"
								nout-color="#263238"
								nout-text-decoration-line="initial"
								nout-font="18px AvenirNextCyrRegular, sans-serif"
							/>
							<Override slot="item" nout-padding="15px 25px 15px 25px" />
							<Override slot="link-index">
								Главная
							</Override>
							<Override slot="link-active" nout-color="#FFE02D" nout-cursor="default" />
							<Override slot="item-404" display="none" />
						</Menu>
						<StackItem width="70%" display="flex" lg-width="100%" nout-width="100%">
							<Override
								slot="StackItemContent"
								nout-flex-direction="column"
								nout-justify-content="center"
								nout-align-items="center"
								nout-padding="0px 30px 0px 30px"
								align-items="flex-end"
								padding="13px 30px 14px 30px"
							/>
							{"        "}
							<Text
								nout-margin="0px 0px 0px 0px"
								font="normal 300 14px/19px 'AvenirNextCyrMedium', sans-serif"
								margin="3px 0px 0px 22px"
								display="inline-block"
								color="#9BABBF"
								lg-margin="10px 0px 0px 22px"
								nout-padding="15px 25px 15px 25px"
							>
								<Link
									hover-color="#3d72cc"
									transition="color 0.2s ease 0s"
									font="300 14px/19px 'AvenirNextCyrMedium'"
									lg-padding="0px 0px 0px 0px"
									nout-padding="0px 0px 0px 0px"
									text-decoration-line="initial"
									color="#4a8cfa"
									lg-margin="0px 0px 0px 0px"
									nout-font="18px AvenirNextCyrRegular, sans-serif"
									href="http://en.uteam.pro/"
								>
									Applying from overseas
								</Link>
							</Text>
							<Text
								nout-margin="0px 0px 0px 0px"
								nout-padding="15px 25px 15px 25px"
								nout-display="none"
								font="normal 300 14px/19px 'AvenirNextCyrMedium', sans-serif"
								margin="3px 0px 0px 22px"
								display="inline-block"
								color="#9BABBF"
								lg-margin="10px 0px 0px 22px"
							>
								<Link
									text-decoration-line="initial"
									hover-color="#3d72cc"
									transition="color 0.2s ease 0s"
									lg-padding="0px 0px 0px 0px"
									lg-margin="0px 0px 0px 0px"
									href="http://ua.uteam.pro/"
									color="#4a8cfa"
									font="300 14px/19px 'AvenirNextCyrMedium'"
									nout-font="18px AvenirNextCyrRegular, sans-serif"
								>
									Вакансії в Україні{" "}
								</Link>
							</Text>
						</StackItem>
						<StackItem width="30%" display="flex" lg-width="100%" nout-width="100%">
							<Override
								slot="StackItemContent"
								padding="13px 30px 14px 30px"
								justify-content="flex-end"
								lg-justify-content="center"
								nout-justify-content="center"
								nout-margin="10px 0px 0px 0px"
								align-items="center"
							/>
							<Link
								hover-background="#4a8cfa"
								hover-color="#ffffff"
								href="https://www.facebook.com/ucoz"
								target="_blank"
								margin="0px 15px 0px 0px"
								border-color="#AFC1D8"
								border-width="2px"
								border-style="solid"
								hover-border-color="#4a8cfa"
								color="#AFC1D8"
								border-radius="50%"
							>
								<Icon
									padding="5px 5px 5px 5px"
									transition="all 0.2s linear 0s"
									size="20px"
									hover-color="inherit"
									color="inherit"
									category="fa"
									icon={FaVk}
									border-radius="50%"
								/>
							</Link>
							<Link
								hover-background="#4a8cfa"
								hover-color="#ffffff"
								hover-border-color="#4a8cfa"
								target="_blank"
								margin="0px 15px 0px 0px"
								border-color="#AFC1D8"
								color="#AFC1D8"
								border-style="solid"
								href="https://www.facebook.com/ucoz"
								border-radius="50%"
								border-width="2px"
							>
								<Icon
									border-radius="50%"
									padding="5px 5px 5px 5px"
									transition="all 0.2s linear 0s"
									size="20px"
									hover-color="inherit"
									color="inherit"
									category="fa"
									icon={FaFacebookF}
								/>
							</Link>
							<Link
								hover-border-color="#4a8cfa"
								border-color="#AFC1D8"
								color="#AFC1D8"
								border-radius="50%"
								hover-background="#4a8cfa"
								hover-color="#ffffff"
								href="https://twitter.com/ucoz_ru"
								target="_blank"
								margin="0px 15px 0px 0px"
								border-width="2px"
								border-style="solid"
							>
								<Icon
									padding="5px 5px 5px 5px"
									transition="all 0.2s linear 0s"
									size="20px"
									hover-color="inherit"
									color="inherit"
									category="fa"
									icon={FaTwitter}
									border-radius="50%"
								/>
							</Link>
							<Link
								border-radius="50%"
								border-style="solid"
								hover-border-color="#4a8cfa"
								href="https://instagram.com/ucoz_ru"
								margin="0px 15px 0px 0px"
								border-color="#AFC1D8"
								color="#AFC1D8"
								target="_blank"
								border-width="2px"
								hover-background="#4a8cfa"
								hover-color="#ffffff"
							>
								<Icon
									size="20px"
									hover-color="inherit"
									color="inherit"
									category="fa"
									icon={FaInstagram}
									border-radius="50%"
									padding="5px 5px 5px 5px"
									transition="all 0.2s linear 0s"
								/>
							</Link>
							<Link
								nout-margin="0px 0px 0px 0px"
								target="_blank"
								border-color="#AFC1D8"
								border-radius="50%"
								border-width="2px"
								border-style="solid"
								hover-color="#ffffff"
								href="http://ok.ru/ucozru"
								margin="0px 15px 0px 0px"
								color="#AFC1D8"
								hover-background="#4a8cfa"
								hover-border-color="#4a8cfa"
							>
								<Icon
									size="20px"
									hover-color="inherit"
									color="inherit"
									category="fa"
									icon={FaOdnoklassniki}
									border-radius="50%"
									padding="5px 5px 5px 5px"
									transition="all 0.2s linear 0s"
								/>
							</Link>
							{"        "}
						</StackItem>
					</Components.MobileSide>
					<Menu display="flex" nout-display="none">
						<Override slot="link-active" color="#4a8cfa" />
						<Override
							slot="link"
							font="400 16px/24px 'AvenirNextCyrMedium'"
							text-decoration-line="initial"
							color="#263238"
							hover-color="#4a8cfa"
							transition="color 0.3s ease-in-out 0s"
						/>
						<Override slot="link-uteam">
							Команда
						</Override>
						<Override slot="item-404" display="none" />
						<Override slot="link-index" text-decoration-line="initial">
							Главная
						</Override>
						<Override slot="item-active" color="#4a8cfa" />
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
					<Override slot="StackItemContent" justify-content="center" align-items="center" />
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
						color="#263238"
						sm-margin="23px 0px 20px 0px"
						font="normal 500 15px/18px 'AvenirNextCyrMedium'"
						margin="23px 0px 70px 0px"
						display="inline-block"
						padding="0px 0px 0px 0px"
						text-align="center"
					>
						Гибкий график
						<br />
						работы
					</Text>
					{"    "}
				</StackItem>
				<StackItem sm-width="50%" width="33.3333%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="flex-start" />
					{"        "}
					<Image height="70px" src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/icon2.svg?v=2021-01-27T14:59:58.219Z" width="74px" />
					<Text
						text-align="center"
						color="#263238"
						sm-margin="23px 0px 20px 0px"
						font="normal 500 15px/18px 'AvenirNextCyrMedium'"
						margin="23px 0px 70px 0px"
						display="inline-block"
						padding="0px 0px 0px 0px"
					>
						Профессиональное
						<br />
						развитие и
						<br />
						обучение
					</Text>
					{"    "}
				</StackItem>
				<StackItem sm-width="50%" width="33.3333%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="flex-start" />
					{"        "}
					<Image width="74px" height="70px" src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/icon3.svg?v=2021-01-27T14:59:58.223Z" />
					<Text
						color="#263238"
						sm-margin="23px 0px 20px 0px"
						font="normal 500 15px/18px 'AvenirNextCyrMedium'"
						margin="23px 0px 70px 0px"
						display="inline-block"
						padding="0px 0px 0px 0px"
						text-align="center"
					>
						Социальные
						<br />
						гарантии, ДМС
						<br />
					</Text>
					{"    "}
				</StackItem>
				<StackItem display="flex" sm-width="50%" width="33.3333%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" flex-direction="column" />
					{"        "}
					<Image width="74px" height="70px" src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/icon4.svg?v=2021-01-27T14:59:58.223Z" />
					<Text
						display="inline-block"
						padding="0px 0px 0px 0px"
						text-align="center"
						color="#263238"
						font="normal 500 15px/18px 'AvenirNextCyrMedium'"
						margin="23px 0px 0px 0px"
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
						padding="0px 0px 0px 0px"
						text-align="center"
						color="#263238"
						font="normal 500 15px/18px 'AvenirNextCyrMedium'"
						margin="23px 0px 0px 0px"
						display="inline-block"
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
					<Image src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/icon6.svg?v=2021-01-27T14:59:58.226Z" width="74px" height="70px" />
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
					<Override slot="StackItemContent" color="#ffffff" align-items="center" justify-content="flex-start" />
					{"        "}
					<Text display="inline-block" text-align="left" font="--headline3" margin="0px 0px 0px -3px">
						Вакансии
						<br />
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack gap="--cmp-stack-gap-small" margin="0px 0px 0px 0px" max-width="750px" width="100%">
				{"    "}
				<StackItem width="33.33%" display="flex" sm-width="100%" md-width="50%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" />
					{"        "}
					<Link
						font="normal 600 18px/24px 'AvenirNextCyrRegular', sans-serif"
						hover-color="#ffffff"
						transition="color 0.2s linear 0s"
						href="/vacancies/#msk"
						text-decoration-line="initial"
						color="#ffd83a"
					>
						Баку
						<br />
						<Span
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							color="#ffffff"
							font="600 12px/24px AvenirNextCyrRegular, sans-serif"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							user-select="auto"
							pointer-events="auto"
						>
							2 вакансии
						</Span>
					</Link>
					{"    "}
				</StackItem>
				<StackItem width="33.33%" display="flex" sm-width="100%" md-width="50%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" />
					{"        "}
					<Link
						text-decoration-line="initial"
						color="#ffd83a"
						font="normal 600 18px/24px 'AvenirNextCyrRegular', sans-serif"
						hover-color="#ffffff"
						transition="color 0.2s linear 0s"
						href="/vacancies/#rnd"
					>
						Ростов-на-Дону
						<br />
						<Span
							color="#ffffff"
							font="600 12px/24px AvenirNextCyrRegular, sans-serif"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							3 вакансии
						</Span>
					</Link>
					{"    "}
				</StackItem>
				<StackItem width="33.33%" display="flex" sm-width="100%" md-width="50%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" />
					{"        "}
					<Link
						href="/vacancies/#fl"
						text-decoration-line="initial"
						color="#ffd83a"
						font="normal 600 18px/24px 'AvenirNextCyrRegular', sans-serif"
						hover-color="#ffffff"
						transition="color 0.2s linear 0s"
					>
						Удаленная работа
						<br />
						<Span
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							color="#ffffff"
							font="600 12px/24px AvenirNextCyrRegular, sans-serif"
							overflow-wrap="normal"
							word-break="normal"
							user-select="auto"
							pointer-events="auto"
						>
							4 вакансия
						</Span>
					</Link>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="60px 0 80px 0" sm-padding="30px 0 40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Stack max-width="900px" width="100%" margin="0px 0px 0px 0px">
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
				<StackItem display="flex" md-width="50%" width="25%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" flex-direction="column" />
					{"        "}
					<Image src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/laurel.svg?v=2021-01-26T17:35:48.102Z" />
					<Text
						color="#263238"
						font="normal 500 15px/18px 'AvenirNextCyrMedium'"
						margin="23px 0px 0px 0px"
						display="inline-block"
						padding="0px 0px 0px 0px"
						text-align="center"
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
						padding="0px 0px 0px 0px"
						text-align="center"
						color="#263238"
						font="normal 500 15px/18px 'AvenirNextCyrMedium'"
						margin="23px 0px 0px 0px"
						display="inline-block"
					>
						Лучший
						<br />
						корпоративный сайт
						<br />
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="25%" display="flex" md-width="50%">
					<Override slot="StackItemContent" justify-content="flex-start" flex-direction="column" align-items="center" />
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
					<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="flex-start" />
					{"        "}
					<Image src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/laurel.svg?v=2021-01-26T17:35:48.102Z" />
					<Text
						padding="0px 0px 0px 0px"
						text-align="center"
						color="#263238"
						font="normal 500 15px/18px 'AvenirNextCyrMedium'"
						margin="23px 0px 0px 0px"
						display="inline-block"
					>
						Победитель
						<br />
						Open Web Awards
						<br />
					</Text>
					{"    "}
				</StackItem>
			</Stack>
			<Stack max-width="900px" width="100%" margin="10px 0px 0px 0px">
				{"        "}
				<StackItem width="33.33%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" flex-direction="column" />
					{"        "}
					<Text
						text-align="center"
						color="#263238"
						font="normal 500 15px/18px 'AvenirNextCyrMedium'"
						margin="23px 0px 0px 0px"
						display="inline-block"
						padding="0px 0px 0px 0px"
					>
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							font="normal bold 48px/42px 'AvenirNextCyrRegular', sans-serif"
							color="#4a8cfa"
							user-select="auto"
							pointer-events="auto"
						>
							17
						</Strong>
					</Text>
					<Text
						color="#263238"
						font="normal 500 15px/18px 'AvenirNextCyrMedium'"
						margin="23px 0px 0px 0px"
						display="inline-block"
						padding="0px 0px 0px 0px"
						text-align="center"
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
					<Override slot="StackItemContent" justify-content="flex-start" flex-direction="column" align-items="center" />
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
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							font="normal bold 48px/42px 'AvenirNextCyrRegular', sans-serif"
							color="#4a8cfa"
							overflow-wrap="normal"
							word-break="normal"
							user-select="auto"
							pointer-events="auto"
						>
							80+
						</Strong>
					</Text>
					<Text
						display="inline-block"
						padding="0px 0px 0px 0px"
						text-align="center"
						color="#263238"
						font="normal 500 15px/18px 'AvenirNextCyrMedium'"
						margin="23px 0px 0px 0px"
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
						padding="0px 0px 0px 0px"
						text-align="center"
						color="#263238"
						font="normal 500 15px/18px 'AvenirNextCyrMedium'"
						margin="23px 0px 0px 0px"
						display="inline-block"
					>
						<Strong
							color="#4a8cfa"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							font="normal bold 48px/42px 'AvenirNextCyrRegular', sans-serif"
							user-select="auto"
							pointer-events="auto"
						>
							3
						</Strong>
						{" "}
					</Text>
					<Text
						padding="0px 0px 0px 0px"
						text-align="center"
						color="#263238"
						font="normal 500 15px/18px 'AvenirNextCyrMedium'"
						margin="23px 0px 0px 0px"
						display="inline-block"
					>
						комфортных офиса{"\n"}
						<br />
						в России, Украине и Азербайджане
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" flex-direction="column" />
					{"        "}
					<Link
						background="#4a8cfa"
						font="600 16px 'AvenirNextCyrRegular', sans-serif"
						hover-background="#437de0"
						text-align="center"
						text-decoration-line="initial"
						color="#ffffff"
						transition="background 0.2s linear 0s"
						margin="40px 0px 0px 0px"
						href="/resume"
						padding="14px 15px 15px 15px"
						border-radius="5px"
					>
						Как попасть в команду
					</Link>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Components.Footer />
		<Components.EmbedJS />
		<RawHtml>
			<link
				href={"/nubexPrint.css"}
				media={"print"}
				type={"text/css"}
				rel={"stylesheet"}
				place={"endOfHead"}
				rawKey={"601c3cb7f03035695e1bad36"}
			/>
			<meta name={"yandex-verification"} content={"7ac9fd5fa6a12f5d"} place={"endOfHead"} rawKey={"604a10bbd967a07a086ed553"} />
			<meta name={"google-site-verification"} content={"kg7CxTxZRGHaVD8XLuJEWXRQn5pApLyI2aLAmjVtk4U"} place={"endOfHead"} rawKey={"604a6ae061f09e11051188d1"} />
			<script place={"endOfHead"} rawKey={"607d5e128c5b715c34cc6769"}>
				{"(function(w, d, s, l, i) {\n    if (w[l]) return;\n\n    w[l] = w[l] || [];\n    w[l].push({\n        'gtm.start': new Date().getTime(),\n        event: 'gtm.js'\n    });\n    var f = d.getElementsByTagName(s)[0],\n        j = d.createElement(s),\n        dl = l != 'dataLayer' ? '&l=' + l : '';\n    j.async = true;\n    j.src =\n        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;\n    f.parentNode.insertBefore(j, f);\n})(window, document, 'script', 'dataLayer', 'GTM-PLFV4KG');"}
			</script>
			<meta
				charset={""}
				name={"facebook-domain-verification"}
				content={"3k8kfynnwa8cp30e13qj1ppei7kh1f"}
				place={"endOfHead"}
				rawKey={"6086e36e344c4251dc26bfe2"}
			/>
			<style place={"endOfHead"} rawKey={"601c3c7d7571e39a08c18a0b"}>
				{"@media (min-width: 1200px) {\n* {\n    scroll-behavior: smooth;\n    }\n    }\n  .active .fileText {\n  display: none;\n  }\n  input.fileText {\n      opacity: 1 !important;\n  }\n  * {\n    -webkit-tap-highlight-color: transparent!important;\n  }\n  @font-face {\n    font-family: 'AvenirNextCyrRegular';\n    src: url('/fonts/AvenirNextCyr-Regular.eot');\n    src: url('/fonts/AvenirNextCyr-Regular.eot?#iefix') format('embedded-opentype'), url('/fonts/AvenirNextCyr-Regular.woff') format('woff'), url('/fonts/AvenirNextCyr-Regular.ttf') format('truetype');\n    font-weight: normal;\n    font-style: normal;\n    font-display: auto;\n  }\n  @font-face {\n    font-family: 'AvenirNextCyrMedium';\n    src: url('/fonts/AvenirNextCyr-Medium.eot');\n    src: url('/fonts/AvenirNextCyr-Medium.eot?#iefix') format('embedded-opentype'), url('/fonts/AvenirNextCyr-Medium.woff') format('woff'), url('/fonts/AvenirNextCyr-Medium.ttf') format('truetype');\n    font-weight: normal;\n    font-style: normal;\n    font-display: auto;\n  }\n  @font-face {\n    font-family: 'AvenirNextCyrBold';\n    src: url('/fonts/AvenirNextCyr-Bold.eot');\n    src: url('/fonts/AvenirNextCyr-Bold.eot?#iefix') format('embedded-opentype'), url('/fonts/AvenirNextCyr-Bold.woff') format('woff'), url('/fonts/AvenirNextCyr-Bold.ttf') format('truetype');\n    font-weight: normal;\n    font-style: normal;\n    font-display: auto;\n  }\n  @font-face {\n    font-family: 'AvenirNextCyrDemi';\n    src: url('/fonts/AvenirNextCyr-Demi.otf');\n    font-weight: normal;\n    font-style: normal;\n    font-display: auto;\n  }\n  body {\n    font-family: 'AvenirNextCyrRegular', sans-serif;\n    font-weight: normal;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n:focus {\n  outline: none;\n}\n\n.nobutton {\npointer-events: none; \n} "}
			</style>
		</RawHtml>
	</Theme>;
});