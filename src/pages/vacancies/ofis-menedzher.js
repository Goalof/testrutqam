import React from "react";
import theme from "theme";
import { Theme, Icon, Link, Text, List, Strong, Image, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
import { MdKeyboardArrowLeft } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"vacancies/ofis-menedzher"} />
		<Helmet>
			<title>
				Офис менеджер
			</title>
			<meta name={"description"} content={"Команда uKit Group в поиске активного и жизнерадостного офис-менеджера на неполный рабочий день (6 часов)"} />
			<meta property={"og:title"} content={"Офис менеджер"} />
			<meta property={"og:description"} content={"Команда uKit Group в поиске активного и жизнерадостного офис-менеджера на неполный рабочий день (6 часов)"} />
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
					<Override slot="StackItemContent" align-items="flex-start" justify-content="flex-start" flex-direction="column" />
					{"        "}
					<Link
						className="noprint"
						href="/vacancies"
						transition="color 0.2s linear 0s"
						display="flex"
						margin="0px 0px 20px 0px"
						text-decoration-line="initial"
						color="#4a8cfa"
						font="14px 'AvenirNextCyrMedium', sans-serif"
						hover-color="#3d72cc"
					>
						<Icon
							category="md"
							icon={MdKeyboardArrowLeft}
							color="inherit"
							size="20px"
							margin="-1px 2px 0px -2px"
							hover-color="inherit"
						/>
						К списку вакансий
					</Link>
					<Text
						color="#263238"
						sm-font="normal 500 40px/1.2 'AvenirNextCyrDemi', sans-serif"
						as="h1"
						font="normal 500 44px/1.2 'AvenirNextCyrDemi', sans-serif"
						margin="0px 0px 25px -3px"
						display="inline-block"
						sm-margin="0px 0px 20px 0px"
						text-align="left"
					>
						Офис-менеджер
					</Text>
					<Text
						text-align="center"
						color="#333"
						letter-spacing=".2"
						font="normal 400 18px/1.2 'AvenirNextCyrMedium', sans-serif"
						margin="0px 0px 20px 0px"
						display="inline-block"
						sm-margin="0px 0px 10px 0px"
					>
						Проект uKit Group | Баку
					</Text>
					<Text
						letter-spacing="0.3px"
						color="#333"
						font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif"
						margin="0px 0px 0px 0px"
						display="inline-block"
						sm-margin="10px 0px 20px 0px"
					>
						Мы ищем собранного, организованного и проактивного специалиста в нашу команду.
						<br />
						<br />
						Весь уклон деятельности связан со спецификой IT-отрасли.{"\n\n"}
					</Text>
					<Text
						sm-margin="10px 0px 20px 0px"
						text-align="left"
						color="#333"
						letter-spacing=".2"
						font="normal 400 20px/1.2 'AvenirNextCyrMedium', sans-serif"
						margin="24px 0px 18px 0px"
						display="inline-block"
					>
						Должностные обязанности:
					</Text>
					<Text
						font="normal 500 18px/1.2 'AvenirNextCyrMedium', sans-serif"
						margin="0px 0px 18px 0px"
						display="inline-block"
						sm-margin="10px 0px 20px 0px"
						text-align="left"
						color="#333"
						letter-spacing=".2"
					>
						Стандартные офис-менеджерские:
					</Text>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text margin="0px 0px 12px 5px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Жизнеобеспечение офиса (заказ воды, канцелярии и прочее);
							<br />
							{"\n\n"}
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Делопроизводство: работа с внутренней документацией, входящей корреспонденцией;
						</Text>
					</List>
					<List padding="0px 0px 0px 20px" margin="0px 0px 0px 0px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Формирование почтовых отправлений, взаимодействие с курьерскими службами;
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Оперативный и качественный поиск необходимой информации по запросу руководителя;
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Подготовка и организация совещаний, встреч, деловых поездок, командировок;
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Travel-поддержка: бронирование билетов, гостиниц, трансфера, продумывание логистики;
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Выполнение различных поручений руководителя.
							<br />
							{"\n\n"}
						</Text>
					</List>
					<Text
						text-align="left"
						color="#333"
						letter-spacing=".2"
						font="normal 500 18px/1.2 'AvenirNextCyrMedium', sans-serif"
						margin="10px 0px 18px 0px"
						display="inline-block"
						sm-margin="10px 0px 20px 0px"
					>
						Творческо-разнообразные:
					</Text>
					<List padding="0px 0px 0px 20px" margin="0px 0px 0px 0px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							участие в планировании и организации офисных посиделок, развлекательных мероприятий, корпоративов;
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							любые разумные инициативы, связанные с улучшением комфорта для сотрудников и т.д. будут приветствоваться.
						</Text>
					</List>
					<Text
						sm-margin="10px 0px 20px 0px"
						text-align="left"
						color="#333"
						letter-spacing=".2"
						font="normal 400 20px/1.2 'AvenirNextCyrMedium', sans-serif"
						margin="20px 0px 18px 0px"
						display="inline-block"
					>
						Требования:
						<br />
						{"\n\n"}
					</Text>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Релевантный опыт на аналогичной позиции от 1 года;
						</Text>
					</List>
					<List padding="0px 0px 0px 20px" margin="0px 0px 0px 0px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Навыки организации работы офиса;
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text margin="0px 0px 12px 5px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Знание русского и азербайджанского языков;
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text margin="0px 0px 12px 5px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Навыки эффективных коммуникаций, грамотная устная и письменная речь;
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text margin="0px 0px 12px 5px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Собранность, навыки эффективной самоорганизации;
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text margin="0px 0px 12px 5px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Умение решать нестандартные бизнес-задачи;
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text margin="0px 0px 12px 5px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Умение осуществлять research быстро и эффективно;
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text margin="0px 0px 12px 5px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							<Strong>
								Опытный пользователь ПК, умение работать с документами и таблицами;
							</Strong>
							<br />
							{"\n\n"}
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text margin="0px 0px 12px 5px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Доброжелательность, корректность, знание основ деловой этики;
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text margin="0px 0px 12px 5px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Здоровые амбиции, желание расти и развиваться в компании.
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px" />
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px" />
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px" />
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px" />
					<Text
						color="#333"
						letter-spacing=".2"
						font="normal 400 20px/1.2 'AvenirNextCyrMedium', sans-serif"
						margin="20px 0px 12px 0px"
						display="inline-block"
						sm-margin="10px 0px 20px 0px"
						text-align="left"
					>
						Условия работы:
					</Text>
					<Box
						align-items="center"
						margin="0px 0px 6px 0px"
						lg-margin="0px 0px 6px 0px"
						lg-align-items="flex-start"
						display="flex"
					>
						<Image
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/tick.svg?v=2021-02-04T00:08:19.533Z"
							width="15px"
							height="12px"
							padding="0px 0px 0px 0px"
							margin="0px 10px 0px 0px"
							lg-margin="12px 10px 0px 0px"
						/>
						<Text margin="3px 0px 3px 0px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							График работы: фулл-тайм в офисе или гибридный режим с 10:00 до 19:00;
							<br />
							{"\n\n"}
						</Text>
					</Box>
					<Box
						lg-align-items="flex-start"
						lg-padding="0px 0px 0px 0px"
						display="flex"
						align-items="center"
						margin="0px 0px 6px 0px"
					>
						<Image
							height="12px"
							padding="0px 0px 0px 0px"
							margin="0px 10px 0px 0px"
							lg-margin="12px 10px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/tick.svg?v=2021-02-04T00:08:19.533Z"
							width="15px"
						/>
						<Text margin="3px 0px 3px 0px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Заработная плата зависит от опыта и навыков конкретного кандидата;
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
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/tick.svg?v=2021-02-04T00:08:19.533Z"
							width="15px"
							height="12px"
							padding="0px 0px 0px 0px"
							margin="0px 10px 0px 0px"
							lg-margin="12px 10px 0px 0px"
						/>
						<Text margin="3px 0px 3px 0px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Профессиональный рост — приветствуется! В компании множество направлений, в которых вы сможете найти себя - от управления персоналом, бухгалтерии, маркетинга до технических специализаций;
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
							padding="0px 0px 0px 0px"
							margin="0px 10px 0px 0px"
							lg-margin="12px 10px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/tick.svg?v=2021-02-04T00:08:19.533Z"
							width="15px"
							height="12px"
						/>
						<Text margin="3px 0px 3px 0px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Расположение: г. Баку, пр-кт. Гейдара Алиева, 205.
						</Text>
					</Box>
					<Components.PopUp
						top="40%"
						transition="all 0.5s ease 0s"
						left="-30px"
						bottom="auto"
						right="auto"
					>
						<Override
							slot="button"
							className="noprint"
							transition="all 0.2s linear 0s"
							hover-left="0px"
							color="#263238"
							background="#ffd83a"
							border-radius="5px"
							hover-background="#e6c235"
							font="normal 500 16px/50px 'AvenirNextCyrMedium', sans-serif"
							letter-spacing=".1px"
							padding="0px 15px 0px 15px"
							left="-30px"
							top="40%"
							margin="30px 0px 10px 0px"
							bottom="auto"
							right="auto"
						>
							Откликнуться на вакансию
						</Override>
						<Override
							slot="wrapper"
							padding="0px 0px 0px 0px"
							border-radius="0px"
							overflow-y="scroll"
							margin="0px 0px 0px 0px"
							max-width="672px"
							width="100%"
							height="100%"
							max-height="1150px"
							background="#ffffff"
						/>
						<Override
							slot="close"
							color="#c5cfdb"
							padding="0.7rem 0.7rem .5rem .5rem"
							size="20px"
							hover-color="#333"
							transition="color 0.3s ease 0s"
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