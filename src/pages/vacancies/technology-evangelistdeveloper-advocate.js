import React from "react";
import theme from "theme";
import { Theme, Icon, Link, Text, List, Image, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
import { MdKeyboardArrowLeft } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"vacancies/technology-evangelistdeveloper-advocate"} />
		<Helmet>
			<title>
				Technology Evangelist/Developer Advocate
			</title>
			<meta name={"description"} content={"Компания uKit Group открывает вакансию системного администратора."} />
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
		<Components.Header />
		<Section padding="140px 0 60px 0" sm-padding="110px 0 40px 0" lg-padding="120px 0 80px 0">
			<Override slot="SectionContent" align-items="center" />
			<Stack margin="0px 0px 0px 0px" max-width="850px">
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" justify-content="flex-start" flex-direction="column" align-items="flex-start" />
					{"        "}
					<Link
						className="noprint"
						transition="color 0.2s linear 0s"
						text-decoration-line="initial"
						color="#4a8cfa"
						font="14px 'AvenirNextCyrMedium', sans-serif"
						hover-color="#3d72cc"
						display="flex"
						href="/vacancies"
						margin="0px 0px 20px 0px"
					>
						<Icon
							icon={MdKeyboardArrowLeft}
							color="inherit"
							size="20px"
							margin="-1px 2px 0px -2px"
							hover-color="inherit"
							category="md"
						/>
						К списку вакансий
					</Link>
					<Text
						text-align="left"
						color="#263238"
						sm-font="normal 500 40px/1.2 'AvenirNextCyrDemi', sans-serif"
						as="h1"
						font="normal 500 44px/1.2 'AvenirNextCyrDemi', sans-serif"
						margin="0px 0px 25px -3px"
						display="inline-block"
						sm-margin="0px 0px 20px 0px"
					>
						Technology Evangelist/Developer Advocate
					</Text>
					<Text
						sm-margin="0px 0px 10px 0px"
						text-align="center"
						color="#333"
						letter-spacing=".2"
						font="normal 400 18px/1.2 'AvenirNextCyrMedium', sans-serif"
						margin="0px 0px 20px 0px"
						display="inline-block"
					>
						Проект Quarkly| Удаленная работа
					</Text>
					<Text
						sm-margin="10px 0px 20px 0px"
						letter-spacing="0.3px"
						color="#333"
						font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif"
						margin="0px 0px 0px 0px"
						display="inline-block"
					>
						Мы ищем человека для продвижения на англоязычном рынке проекта Quarkly, ориентированного на профессиональных пользователей (веб-дизайнеров, фронтенд-разработчиков, верстальщиков).
					</Text>
					<Text
						color="#333"
						letter-spacing=".2"
						font="normal 400 20px/1.2 'AvenirNextCyrMedium', sans-serif"
						margin="24px 0px 18px 0px"
						display="inline-block"
						sm-margin="10px 0px 20px 0px"
						text-align="left"
					>
						Задачи:
					</Text>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text margin="0px 0px 12px 5px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Представлять и продвигать проект Quarkly в профессиональной среде.
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Выстраивать взаимодействие с профессиональными сообществами, лидерами мнений.
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Организовывать участие в мероприятиях, выступать на мероприятиях (конференции, митапы и пр.)
						</Text>
					</List>
					<Text
						color="#333"
						letter-spacing=".2"
						font="normal 400 20px/1.2 'AvenirNextCyrMedium', sans-serif"
						margin="20px 0px 18px 0px"
						display="inline-block"
						sm-margin="10px 0px 20px 0px"
						text-align="left"
					>
						Требования:
						<br />
					</Text>
					<List padding="0px 0px 0px 20px" margin="0px 0px 0px 0px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Свободный английский язык.
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Умение легко завязывать и поддерживать рабочие отношения с журналистами и блогерами.
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Инициативность, трезвость мышления и бизнес-ориентированность.
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Знание и понимание веба (нужно говорить на одном языке с аудиторией и разработчиками продуктов).
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Наличие деловых контактов на рынке digital/IT будет бесспорным плюсом.
						</Text>
					</List>
					<Text
						text-align="left"
						color="#333"
						letter-spacing=".2"
						font="normal 400 20px/1.2 'AvenirNextCyrMedium', sans-serif"
						margin="20px 0px 12px 0px"
						display="inline-block"
						sm-margin="10px 0px 20px 0px"
					>
						Условия:
						<br />
					</Text>
					<Box
						display="flex"
						align-items="center"
						margin="0px 0px 6px 0px"
						lg-margin="0px 0px 6px 0px"
						lg-align-items="flex-start"
					>
						<Image
							width="15px"
							height="12px"
							padding="0px 0px 0px 0px"
							margin="0px 10px 0px 0px"
							lg-margin="12px 10px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/tick.svg?v=2021-02-04T00:08:19.533Z"
						/>
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="6px 0px 6px 0px">
							Удаленная работа.
							<br />
						</Text>
					</Box>
					<Box
						display="flex"
						align-items="center"
						margin="0px 0px 6px 0px"
						lg-align-items="flex-start"
						lg-padding="0px 0px 0px 0px"
					>
						<Image
							width="15px"
							height="12px"
							padding="0px 0px 0px 0px"
							margin="0px 10px 0px 0px"
							lg-margin="12px 10px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/tick.svg?v=2021-02-04T00:08:19.533Z"
						/>
						<Text margin="6px 0px 6px 0px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Частичная занятость
						</Text>
					</Box>
					<Components.PopUp
						left="-30px"
						bottom="auto"
						right="auto"
						top="40%"
						transition="all 0.5s ease 0s"
					>
						<Override
							slot="close"
							color="#c5cfdb"
							padding="0.7rem 0.7rem .5rem .5rem"
							size="20px"
							hover-color="#333"
							transition="color 0.3s ease 0s"
						/>
						<Override
							slot="button"
							bottom="auto"
							letter-spacing=".1px"
							transition="all 0.2s linear 0s"
							left="-30px"
							hover-left="0px"
							margin="30px 0px 10px 0px"
							font="normal 500 16px/50px 'AvenirNextCyrMedium', sans-serif"
							background="#ffd83a"
							right="auto"
							border-radius="5px"
							color="#263238"
							padding="0px 15px 0px 15px"
							top="40%"
							hover-background="#e6c235"
						>
							Откликнуться на вакансию
						</Override>
						<Override
							slot="wrapper"
							background="#ffffff"
							width="100%"
							overflow-y="scroll"
							height="100%"
							max-height="1150px"
							max-width="672px"
							margin="0px 0px 0px 0px"
							padding="0px 0px 0px 0px"
							border-radius="0px"
						/>
						<Section padding="0px 0 40px 0">
							<Override slot="SectionContent" align-items="center" width="100%" />
							<Components.EmbedHTML width="100%" />
							<Components.EmbedJS />
						</Section>
					</Components.PopUp>
					{"    "}
				</StackItem>
				<Components.SocialPrint />
				{"    "}
			</Stack>
		</Section>
		<Components.Footer />
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
				{"(function(w, d, s, l, i) {\n    if (w[l]) return;\n\n    w[l] = w[l] || [];\n    w[l].push({\n        'gtm.start': new Date().getTime(),\n        event: 'gtm.js'\n    });\n    var f = d.getElementsByTagName(s)[0],\n        j = d.createElement(s),\n        dl = l != 'dataLayer' ? '&l=' + l : '';\n    j.async = true;\n    j.src =\n        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;\n    f.parentNode.insertBefore(j, f);\n})(window, document, 'script', 'dataLayer', 'GTM-MS77SWK5');"}
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