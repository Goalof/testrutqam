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
		<GlobalQuarklyPageStyles pageUrl={"vacancies/it-hr-menedjer"} />
		<Helmet>
			<title>
				IT HR-менеджер
			</title>
			<meta name={"description"} content={"Мы ищем HR-менеджера, который станет важной частью нашей команды и поможет развивать корпоративную культуру и сотрудников.\n\nТы получишь inhouse опыт в успешной продуктовой IT-компании, прокачаешь свои навыки в найме и управлении персоналом"} />
			<meta property={"og:title"} content={"IT HR-менеджер"} />
			<meta property={"og:description"} content={"Мы ищем HR-менеджера, который станет важной частью нашей команды и поможет развивать корпоративную культуру и сотрудников.\n\nТы получишь inhouse опыт в успешной продуктовой IT-компании, прокачаешь свои навыки в найме и управлении персоналом"} />
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
		<Section padding="140px 0 60px 0" sm-padding="110px 0 40px 0" lg-padding="120px 0 80px 0" color="#333">
			<Override slot="SectionContent" align-items="center" />
			<Stack max-width="850px" margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" justify-content="flex-start" flex-direction="column" align-items="flex-start" />
					{"        "}
					<Link
						transition="color 0.2s linear 0s"
						hover-color="#3d72cc"
						className="noprint"
						margin="0px 0px 20px 0px"
						text-decoration-line="initial"
						display="flex"
						href="/vacancies"
						color="#4a8cfa"
						font="14px 'AvenirNextCyrMedium', sans-serif"
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
						sm-font="normal 500 40px/1.2 'AvenirNextCyrDemi', sans-serif"
						as="h1"
						font="normal 500 44px/1.2 'AvenirNextCyrDemi', sans-serif"
						margin="0px 0px 25px -3px"
						display="inline-block"
						sm-margin="0px 0px 20px 0px"
						text-align="left"
						color="#263238"
					>
						IT HR-менеджер
					</Text>
					<Text
						display="inline-block"
						sm-margin="0px 0px 10px 0px"
						text-align="center"
						color="#333"
						letter-spacing=".2"
						font="normal 400 18px/1.2 'AvenirNextCyrMedium', sans-serif"
						margin="0px 0px 20px 0px"
					>
						Проект uKit Group | Ростов-на-Дону{"\n\n"}
					</Text>
					<Text
						display="inline-block"
						sm-margin="10px 0px 20px 0px"
						letter-spacing="0.3px"
						color="#333"
						font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif"
						margin="0px 0px 0px 0px"
					>
						Мы ищем HR-менеджера, который станет неотъемлемой частью нашей команды.
						<br />
						<br />
						Ты получишь опыт работы в успешной продуктовой IT-компании, сможешь улучшить навыки в найме и управлении персоналом.
						<br />
						<br />
						Мы ориентированы на кандидатов уровня middle, но готовы рассмотреть способных junior-специалистов с сильным желанием расти и развиваться в сфере HR и IT.
						<br />
						Напиши несколько слов в сопроводительном письме — возможно, мы подходим друг другу.{"\n\n\n\n\n\n"}
					</Text>
					<Text
						display="inline-block"
						sm-margin="10px 0px 20px 0px"
						text-align="left"
						color="#333"
						letter-spacing=".2"
						font="normal 400 20px/1.2 'AvenirNextCyrMedium', sans-serif"
						margin="20px 0px 18px 0px"
					>
						Что предстоит делать:
					</Text>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px" color="#333">
						<Text margin="0px 0px 12px 5px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Поддержка мотивации и настроения команды: организация мероприятий, направленных на повышение лояльности сотрудников.
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px" color="#333">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Онбординг и адаптация новых сотрудников: разработка и внедрение эффективных процессов для быстрого включения новичков в работу.
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px" color="#333">
						<Text margin="0px 0px 12px 5px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Проведение индивидуальных встреч (1:1): регулярное общение с сотрудниками для выявления потребностей и проблем.
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px" color="#333">
						<Text margin="0px 0px 12px 5px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Анализ настроений команды: проведение опросов среди сотрудников и работа с полученными результатами для улучшения условий труда.
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px" color="#333">
						<Text margin="0px 0px 12px 5px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Ведение не более 3-х вакансий в месяц в области IT и Digital.
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px" color="#333">
						<Text margin="0px 0px 12px 5px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Организация ивентов: создание событий для сплочения команды и улучшения внутренней атмосферы.
							<br />
							{"\n\n"}
						</Text>
					</List>
					<Text
						display="inline-block"
						sm-margin="10px 0px 20px 0px"
						text-align="left"
						color="#333"
						letter-spacing=".2"
						font="normal 400 20px/1.2 'AvenirNextCyrMedium', sans-serif"
						margin="20px 0px 18px 0px"
					>
						Что мы ожидаем от тебя:
					</Text>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px" color="#333">
						<Text margin="0px 0px 12px 5px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Искренний интерес и умение работать с людьми.
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px" color="#333">
						<Text margin="0px 0px 12px 5px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Опыт в IT на позициях HR/рекрутер/офис-менеджер.
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px" color="#333">
						<Text margin="0px 0px 12px 5px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Опыт успешного решения HR-кейсов с сотрудниками.
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px" color="#333">
						<Text margin="0px 0px 12px 5px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Понимание IT-рынка и его требований.
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px" color="#333">
						<Text margin="0px 0px 12px 5px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Опыт использования телеграмм чатов/каналов как одного из основных источников кандидатов.
							<br />
							{"\n\n"}
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px" color="#333">
						<Text margin="0px 0px 12px 5px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Навыки организации корпоративных мероприятий, team building и HR-активностей.
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px" color="#333">
						<Text margin="0px 0px 12px 5px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Опыт работы с HR-аналитикой будет плюсом.
						</Text>
					</List>
					<Text
						margin="20px 0px 12px 0px"
						display="inline-block"
						sm-margin="10px 0px 20px 0px"
						text-align="left"
						color="#333"
						letter-spacing=".2"
						font="normal 400 20px/1.2 'AvenirNextCyrMedium', sans-serif"
					>
						Условия:
						<br />
					</Text>
					<Box
						margin="0px 0px 6px 0px"
						lg-margin="0px 0px 6px 0px"
						lg-align-items="flex-start"
						display="flex"
						align-items="center"
						color="#333"
					>
						<Image
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/tick.svg?v=2021-02-04T00:08:19.533Z"
							width="15px"
							height="12px"
							padding="0px 0px 0px 0px"
							margin="0px 10px 0px 0px"
							lg-margin="12px 10px 0px 0px"
						/>
						<Text margin="6px 0px 6px 0px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Официальное трудоустройство с первого дня по ТК РФ.
						</Text>
					</Box>
					<Box
						display="flex"
						align-items="center"
						margin="0px 0px 6px 0px"
						lg-align-items="flex-start"
						lg-padding="0px 0px 0px 0px"
						color="#333"
					>
						<Image
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/tick.svg?v=2021-02-04T00:08:19.533Z"
							width="15px"
							height="12px"
							padding="0px 0px 0px 0px"
							margin="0px 10px 0px 0px"
							lg-margin="12px 10px 0px 0px"
						/>
						<Text margin="6px 0px 6px 0px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Работа 5/2 в офисе или гибридный график — выбирай, что подходит тебе.
						</Text>
					</Box>
					<Box
						display="flex"
						align-items="center"
						margin="0px 0px 6px 0px"
						lg-align-items="flex-start"
						lg-padding="0px 0px 0px 0px"
						color="#333"
					>
						<Image
							padding="0px 0px 0px 0px"
							margin="0px 10px 0px 0px"
							lg-margin="12px 10px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/tick.svg?v=2021-02-04T00:08:19.533Z"
							width="15px"
							height="12px"
						/>
						<Text margin="6px 0px 6px 0px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Начало рабочего дня до 10:00.
						</Text>
					</Box>
					<Box
						display="flex"
						align-items="center"
						margin="0px 0px 6px 0px"
						lg-align-items="flex-start"
						lg-padding="0px 0px 0px 0px"
						color="#333"
					>
						<Image
							lg-margin="12px 10px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/tick.svg?v=2021-02-04T00:08:19.533Z"
							width="15px"
							height="12px"
							padding="0px 0px 0px 0px"
							margin="0px 10px 0px 0px"
						/>
						<Text margin="6px 0px 6px 0px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							ДМС с расширенной программой, включая стоматологию.
						</Text>
					</Box>
					<Box
						display="flex"
						align-items="center"
						margin="0px 0px 6px 0px"
						lg-align-items="flex-start"
						lg-padding="0px 0px 0px 0px"
						color="#333"
					>
						<Image
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/tick.svg?v=2021-02-04T00:08:19.533Z"
							width="15px"
							height="12px"
							padding="0px 0px 0px 0px"
							margin="0px 10px 0px 0px"
							lg-margin="12px 10px 0px 0px"
						/>
						<Text margin="6px 0px 6px 0px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Профессиональный рост: обучение, менторство, доступ к корпоративной библиотеке — мы поддержим твое развитие.
						</Text>
					</Box>
					<Box
						lg-padding="0px 0px 0px 0px"
						display="flex"
						align-items="center"
						margin="0px 0px 6px 0px"
						lg-align-items="flex-start"
						color="#333"
					>
						<Image
							lg-margin="12px 10px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/tick.svg?v=2021-02-04T00:08:19.533Z"
							width="15px"
							height="12px"
							padding="0px 0px 0px 0px"
							margin="0px 10px 0px 0px"
						/>
						<Text margin="6px 0px 6px 0px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Современная техника для работы.
						</Text>
					</Box>
					<Box
						lg-align-items="flex-start"
						lg-padding="0px 0px 0px 0px"
						display="flex"
						align-items="center"
						margin="0px 0px 6px 0px"
						color="#333"
					>
						<Image
							lg-margin="12px 10px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/tick.svg?v=2021-02-04T00:08:19.533Z"
							width="15px"
							height="12px"
							padding="0px 0px 0px 0px"
							margin="0px 10px 0px 0px"
						/>
						<Text margin="6px 0px 6px 0px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Уютный офис в Ростове-на-Дону с собственной парковкой и вкусным питанием — у нас своя кухня и повар.
						</Text>
					</Box>
					<Box
						lg-align-items="flex-start"
						lg-padding="0px 0px 0px 0px"
						display="flex"
						align-items="center"
						margin="0px 0px 6px 0px"
						color="#333"
					>
						<Image
							lg-margin="12px 10px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/tick.svg?v=2021-02-04T00:08:19.533Z"
							width="15px"
							height="12px"
							padding="0px 0px 0px 0px"
							margin="0px 10px 0px 0px"
						/>
						<Text margin="6px 0px 6px 0px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Корпоративные мероприятия, чтобы работа приносила не только результат, но и удовольствие от общения с коллегами.
						</Text>
					</Box>
					<Text
						display="inline-block"
						sm-margin="10px 0px 20px 0px"
						letter-spacing="0.3px"
						color="#333"
						font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif"
						margin="16px 0px 0px 0px"
					>
						О нас:
						<br />
						<br />
						Мы — аккредитованная IT-компания с 19-летним опытом создания успешных онлайн-продуктов, таких как uCoz, uKit, WebAsk, RuSender и другие. Наша миссия — помогать пользователям достигать своих целей онлайн, и мы постоянно ищем таланты, которые помогут нам двигаться вперед.
						<br />
						<br />
						Если ты стремишься расти и развиваться в области IT-подбора, присылай отклик — мы ждем тебя в нашей команде!{"\n\n"}
					</Text>
					<Components.PopUp
						right="auto"
						top="40%"
						transition="all 0.5s ease 0s"
						left="-30px"
						bottom="auto"
					>
						<Override
							slot="button"
							bottom="auto"
							top="40%"
							margin="30px 0px 10px 0px"
							hover-background="#e6c235"
							left="-30px"
							background="#ffd83a"
							padding="0px 15px 0px 15px"
							hover-left="0px"
							font="normal 500 16px/50px 'AvenirNextCyrMedium', sans-serif"
							transition="all 0.2s linear 0s"
							letter-spacing=".1px"
							right="auto"
							border-radius="5px"
							color="#263238"
						>
							Откликнуться на вакансию
						</Override>
						<Override
							slot="wrapper"
							background="#ffffff"
							max-width="672px"
							width="100%"
							border-radius="0px"
							height="100%"
							overflow-y="scroll"
							max-height="1150px"
							margin="0px 0px 0px 0px"
							padding="0px 0px 0px 0px"
						/>
						<Override
							slot="close"
							transition="color 0.3s ease 0s"
							color="#c5cfdb"
							padding="0.7rem 0.7rem .5rem .5rem"
							size="20px"
							hover-color="#333"
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