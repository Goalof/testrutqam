import React from "react";
import theme from "theme";
import { Theme, Link, Text, Button, Image, Box, Section, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
import { FaInstagram } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"uteam"} />
		<Helmet>
			<title>
				Команда - Работа в uTeam
			</title>
			<meta name={"description"} content={"uTeam – команда, которая создаёт наши сервисы: uKit, uLanding, uCoz, uCalc. Гордимся не только сервисами, которые создаём, но и тем, что умеем превращать команды профессионалов в настоящих друзей."} />
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
		<Components.HeaderNew>
			<Override slot="text">
				<Link
					href="https://ru.uteam.pro/"
					color="#000000"
					text-decoration-line="initial"
					font="500 18px/50px 'AvenirNextCyrMedium', sans-serif"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					Вакансии
				</Link>
			</Override>
		</Components.HeaderNew>
		<Section padding="120px 0 100px 0" sm-padding="110px 0 0px 0" lg-padding="120px 0 80px 0">
			<Override slot="SectionContent" align-items="center" />
			<Stack margin="0px 0px 0px 0px" max-width="850px">
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					{"        "}
					<Text
						font="--headline1"
						margin="0px 0px 5px 0px"
						display="inline-block"
						sm-text-align="center"
						sm-margin="0px 0px 0px 0px"
						text-align="center"
						color="#263238"
						sm-font="normal 900 53px/1.2 'AvenirNextCyrBold', sans-serif"
					>
						Команда
						<br />
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					{"        "}
					<Text
						margin="0px 10px 5px 10px"
						display="inline-block"
						sm-text-align="center"
						sm-margin="0px 0px 0px 0px"
						text-align="center"
						letter-spacing="0.3px"
						sm-font="normal 400 18px/26px 'AvenirNextCyrRegular', sans-serif"
						font="normal 400 20px/28px 'AvenirNextCyrRegular', sans-serif"
					>
						Мы гордимся не только теми сервисами, которые мы делаем для вас каждый день, но и тем, что умеем превращать профессионалов своего дела в настоящих друзей и членов одной семьи. Посмотрите, как мы живем, — возможно, именно в этой атмосфере и среди этих людей вы окажетесь очень скоро.
						<br />
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					{"        "}
					<Components.Slider width="100%" slides="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/24.jpg?v=2021-02-26T13:53:35.834Z,https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/23s.jpg?v=2021-02-26T13:54:01.485Z,https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/20s.jpg?v=2021-02-26T14:07:34.397Z,https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/19s.jpg?v=2021-02-26T14:07:21.150Z,https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/18s.jpg?v=2021-02-26T14:06:53.166Z,https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/17s.jpg?v=2021-02-26T14:06:30.779Z,https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/16s.jpg?v=2021-02-26T14:03:55.799Z,https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/15s.jpg?v=2021-02-26T14:03:15.590Z,https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/14s.jpg?v=2021-02-26T14:02:30.775Z,https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/13s.jpg?v=2021-02-26T14:02:04.660Z,https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/12s.jpg?v=2021-02-26T13:59:25.121Z,https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/10s.jpg?v=2021-02-26T13:58:35.804Z,https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/09s.jpg?v=2021-02-26T13:58:11.424Z,https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/08s.jpg?v=2021-02-26T13:57:20.677Z,https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/07s.jpg?v=2021-02-26T13:56:59.810Z,https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/06s.jpg?v=2021-02-26T13:56:28.482Z,https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/05s.jpg?v=2021-02-26T13:56:05.742Z,https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/04s.jpg?v=2021-02-26T13:55:43.709Z,https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/03s.jpg?v=2021-02-26T13:55:16.193Z,https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/02s.jpg?v=2021-02-26T13:54:49.366Z">
						<Override slot="Slide 12 Description">
							uTeam, ростовский офис
						</Override>
						<Override slot="Slide 16 Description">
							Финансовый департамент, Москва
							<br />
							Зарина Татрова, Чемарина Алиса, Горбунова Анастасия, Лобаскова Александра
						</Override>
						<Override slot="Slide 18 Description">
							Олег Лисовенко, менеджер проектов и маркетолог, Санкт-Петербург
						</Override>
						<Override
							slot="Slide Description"
							margin="16px 0px 0px 0px"
							background="rgba(0, 0, 0, 0.55)"
							font="400 14px/18px 'AvenirNextCyrMedium'"
							color="#ffffff"
						>
							Slide 1 text
						</Override>
						<Override slot="Slide 1 Description">
							Команда uKit, Ростов-на-Дону
						</Override>
						<Override slot="Slide 7 Description">
							uTeam, Ростов-на-Дону
						</Override>
						<Override slot="Slide 8 Description">
							Татьяна Жукова, руководитель направления локализации, Ростов-на-Дону
						</Override>
						<Override slot="Slide 11 Description">
							HR, Ольга Колесникова и Наталья Маринченко, Ростов-на-Дону
						</Override>
						<Override slot="Points" display="none" />
						<Override slot="Slide 3 Description">
							Frontend-разработчики, Луис Бланко и Роман Арестович, Ростов-на-Дону
						</Override>
						<Override slot="Slide 5 Description">
							Дизайнеры, Анна Курсанова и Андрей Сербуль, Ростов-на-Дону
						</Override>
						<Override slot="Slide 14 Description">
							uTeam, ростовский офис
						</Override>
						<Override slot="Slide 17 Description">
							Совещание в головном офис в Москве. Справа – Ирина Черепанова, директор по продукту, Алексей Попов, руководитель техподдержки, Анна Лубенченко и Антон Бурлаков
						</Override>
						<Override slot="Slide 19 Description">
							uTeam, Санкт-Петербург
						</Override>
						<Override slot="Slide 4 Description">
							Команда дизайнеров, Ростов-на-Дону
							<br />
							Андрей Сербуль, Анна Курсанова, Виктор Кадников, Екатерина Чубукова
						</Override>
						<Override slot="Slide 6 Description">
							uTeam, Ростов-на-Дону
							<br />
							{" "}Роман Штейнберг, Александр Пезиков, Ирина Черепанова, Павел Кудинов, Михаил Гуревич
						</Override>
						<Override slot="Slide 20 Description">
							Команда uCoz, Черкассы (Украина)
						</Override>
						<Override slot="Slide 2 Description">
							Павел Кудинов, технический директор uKit, руковдитель uKit AI, Ростов-на-Дону
						</Override>
						<Override slot="Slide 9 Description">
							Дмитрий Молчанов, руководитель проекта uCalc, Ростов-на-Дону
						</Override>
						<Override slot="Slide 10 Description">
							Иван Возлюбленный, scrum-мастер
							<br />
							{" "}Георгий Авсецин, UI/UX-дизайнер Web Tycoon
						</Override>
						<Override slot="Slide 13 Description">
							uTeam, ростовский офис
						</Override>
						<Override slot="Slide 15 Description">
							Михаил Гуревич, финансовый директор uKit Group, Ростов-на-Дону
						</Override>
					</Components.Slider>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack margin="50px 0px 0px 0px" max-width="1170px">
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="flex-start" justify-content="flex-start" flex-direction="column" />
					{"        "}
					<Components.Tabs
						orientation="Horizontal"
						width="100%"
						height="auto"
						align="center"
						margin="0px 0px 0px 0px"
						defaultTab="one"
					>
						<Components.TabList sm-display="flex" sm-flex-direction="column" sm-width="100%">
							<Override slot="TabList Wrapper" sm-flex-direction="column" />
							<Components.TabItem
								border-radius="5px 0px 0px 5px"
								sm-width="100%"
								tabId="one"
								color="#263238"
								background="#E4E9ED"
								transition="all 0.2s linear 0s"
								margin="0px 2px 0px 0px"
							>
								<Override
									slot="Selected Tab"
									color="#fff"
									border-width="2px"
									background="#4a8cfa"
									border-style="solid"
									border-color="#4a8cfa"
								/>
								<Override
									slot="Tab"
									margin="0px 0px 0px 0px"
									sm-border-radius="5px 5px 0px 0px"
									border-color="rgba(74, 140, 250, 0)"
									border-width="2px"
									border-style="solid"
									color="inherit"
									transition="all 0.2s linear 0s"
									border-radius="5px 0px 0px 5px"
								/>
								<Button
									background="rgba(0, 119, 204, 0)"
									color="inherit"
									padding="8px 12px 8px 12px"
									font="normal 400 14px/22px 'AvenirNextCyrMedium'"
									transition="all 0.2s linear 0s"
									focus-box-shadow="none"
								>
									Баку
								</Button>
							</Components.TabItem>
							<Components.TabItem
								transition="all 0.2s linear 0s"
								margin="0px 2px 0px 0px"
								sm-width="100%"
								tabId="two"
								background="#E4E9ED"
								color="#263238"
								border-color="#263238"
								display="none"
							>
								<Override
									slot="Selected Tab"
									color="#fff"
									background="#4a8cfa"
									border-width="2px"
									border-style="solid"
									border-color="#4a8cfa"
								/>
								<Override
									slot="Tab"
									margin="0px 0px 0px 0px"
									border-radius="0px"
									border-width="2px"
									border-style="solid"
									border-color="rgba(0, 0, 0, 0)"
									transition="all 0.2s linear 0s"
								/>
								<Button
									color="inherit"
									padding="8px 12px 8px 12px"
									font="normal 400 14px/22px 'AvenirNextCyrMedium'"
									border-width="0px"
									transition="all 0.2s linear 0s"
									focus-box-shadow="none"
									background="rgba(0, 119, 204, 0)"
								>
									Санкт-Петербург
								</Button>
							</Components.TabItem>
							<Components.TabItem
								border-color="#263238"
								transition="all 0.2s linear 0s"
								margin="0px 2px 0px 0px"
								sm-width="100%"
								tabId="three"
								background="#E4E9ED"
								color="#263238"
							>
								<Override
									slot="Selected Tab"
									color="#fff"
									background="#4a8cfa"
									border-width="2px"
									border-style="solid"
									border-color="#4a8cfa"
								/>
								<Override
									slot="Tab"
									border-style="solid"
									border-color="rgba(0, 0, 0, 0)"
									transition="all 0.2s linear 0s"
									margin="0px 2px 0px 0px"
									border-radius="0px"
									border-width="2px"
								/>
								<Button
									font="normal 400 14px/22px 'AvenirNextCyrMedium'"
									border-width="0px"
									transition="all 0.2s linear 0s"
									focus-box-shadow="none"
									background="rgba(0, 119, 204, 0)"
									color="inherit"
									padding="8px 12px 8px 12px"
								>
									Ростов-на-Дону
								</Button>
							</Components.TabItem>
							<Components.TabItem
								color="#263238"
								border-color="#263238"
								transition="all 0.2s linear 0s"
								border-radius="0px 5px 5px 0px"
								sm-border-radius="0px 0px 5px 5px"
								sm-width="100%"
								tabId="four"
								background="#E4E9ED"
								display="none"
							>
								<Override
									slot="Selected Tab"
									color="#fff"
									background="#4a8cfa"
									border-width="2px"
									border-style="solid"
									border-color="#4a8cfa"
								/>
								<Override
									slot="Tab"
									border-radius="0px 5px 5px 0px"
									border-width="2px"
									border-style="solid"
									border-color="rgba(0, 0, 0, 0)"
									transition="all 0.2s linear 0s"
									margin="0px 2px 0px 0px"
								/>
								<Button
									color="inherit"
									padding="8px 12px 8px 12px"
									font="normal 400 14px/22px 'AvenirNextCyrMedium'"
									border-width="0px"
									transition="all 0.2s linear 0s"
									focus-box-shadow="none"
									background="rgba(0, 119, 204, 0)"
								>
									Черкассы
								</Button>
							</Components.TabItem>
						</Components.TabList>
						<Components.TabPanels margin="5px 0px 0px 0px">
							<Components.TabPanel tabId="one">
								<Stack margin="40px 0px 0px 0px">
									<StackItem sm-width="100%" width="40%" display="flex" lg-width="100%">
										<Override
											slot="StackItemContent"
											lg-justify-content="center"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
										/>
										{"        "}
										<Text
											sm-margin="0px 0px 30px 0px"
											text-align="center"
											letter-spacing="0.3px"
											color="#3D72CC"
											font="normal 400 30px/36px 'AvenirNextCyrBold', sans-serif"
											margin="0px 0px 18px 0px"
											display="inline-block"
											sm-text-align="center"
										>
											9 сотрудников
										</Text>
										<Text
											font="normal 400 18px/26px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 5px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											lg-text-align="center"
										>
											В Баку в офисе у компании находится руководство, команды продуктологов, маркетинга, PR и бухгалтерия.
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="center"
											flex-direction="column"
											lg-align-items="center"
										/>
										{"        "}
										<Image
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/kurt.jpg?v=2021-01-28T13:05:31.217Z"
											border-radius="100%"
											width="90px"
											srcSet="https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kurt.jpg?v=2021-01-28T13%3A05%3A31.217Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kurt.jpg?v=2021-01-28T13%3A05%3A31.217Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kurt.jpg?v=2021-01-28T13%3A05%3A31.217Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kurt.jpg?v=2021-01-28T13%3A05%3A31.217Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kurt.jpg?v=2021-01-28T13%3A05%3A31.217Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kurt.jpg?v=2021-01-28T13%3A05%3A31.217Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kurt.jpg?v=2021-01-28T13%3A05%3A31.217Z&quality=85&w=3200 3200w"
											sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1280px) 100vw,100vw"
										/>
										<Text
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
										>
											Евгений Курт
										</Text>
										<Text
											letter-spacing="0.3px"
											color="#9BABBF"
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 0px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
										>
											CEO
										</Text>
										{"    "}
									</StackItem>
									<StackItem display="flex" lg-width="50%" sm-width="100%" width="20%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="center"
											flex-direction="column"
											lg-align-items="center"
										/>
										{"        "}
										<Image
											width="90px"
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/cherepanova.jpg?v=2021-02-02T11:19:38.438Z"
											border-radius="100%"
											srcSet="https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/cherepanova.jpg?v=2021-02-02T11%3A19%3A38.438Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/cherepanova.jpg?v=2021-02-02T11%3A19%3A38.438Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/cherepanova.jpg?v=2021-02-02T11%3A19%3A38.438Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/cherepanova.jpg?v=2021-02-02T11%3A19%3A38.438Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/cherepanova.jpg?v=2021-02-02T11%3A19%3A38.438Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/cherepanova.jpg?v=2021-02-02T11%3A19%3A38.438Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/cherepanova.jpg?v=2021-02-02T11%3A19%3A38.438Z&quality=85&w=3200 3200w"
											sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1280px) 100vw,100vw"
										/>
										<Text
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
										>
											Ирина Черепанова
										</Text>
										<Text
											margin="0px 0px 0px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
										>
											Директор по продуктам
										</Text>
										{"    "}
									</StackItem>
									<StackItem lg-width="50%" sm-width="100%" width="20%" display="flex">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
										/>
										{"        "}
										<Image
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/tatrova.jpg?v=2021-02-02T11:19:38.406Z"
											border-radius="100%"
											width="90px"
											srcSet="https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/tatrova.jpg?v=2021-02-02T11%3A19%3A38.406Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/tatrova.jpg?v=2021-02-02T11%3A19%3A38.406Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/tatrova.jpg?v=2021-02-02T11%3A19%3A38.406Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/tatrova.jpg?v=2021-02-02T11%3A19%3A38.406Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/tatrova.jpg?v=2021-02-02T11%3A19%3A38.406Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/tatrova.jpg?v=2021-02-02T11%3A19%3A38.406Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/tatrova.jpg?v=2021-02-02T11%3A19%3A38.406Z&quality=85&w=3200 3200w"
											sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1280px) 100vw,100vw"
										/>
										<Text
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
										>
											Зарина Татрова
										</Text>
										<Text
											margin="0px 0px 0px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
										>
											Главный бухгалтер
										</Text>
										{"    "}
									</StackItem>
									<StackItem sm-width="100%" width="20%" display="flex" lg-width="50%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
										/>
										{"        "}
										<Box
											align-items="center"
											justify-content="center"
											margin="0px 0px 24px 0px"
											width="90px"
											height="90px"
											border-radius="50%"
											background="#3D72CC"
											display="flex"
										>
											<Text color="#ffffff" font="500 36px 'AvenirNextCyrBold', sans-serif">
												+6
											</Text>
										</Box>
										<Text
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
										>
											специалистов
										</Text>
										{"    "}
									</StackItem>
									{"        "}
								</Stack>
							</Components.TabPanel>
							<Components.TabPanel tabId="two">
								<Stack margin="40px 0px 0px 0px">
									<StackItem sm-width="100%" width="40%" display="flex" lg-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
										/>
										{"        "}
										<Text
											font="normal 400 30px/36px 'AvenirNextCyrBold', sans-serif"
											margin="0px 0px 18px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="center"
											letter-spacing="0.3px"
											color="#3D72CC"
										>
											18 сотрудников
										</Text>
										<Text
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
											lg-text-align="center"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											font="normal 400 18px/26px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 5px 0px"
										>
											В питерском офисе работает одна из команд uKit. Тут созданы сервисы uSocial, uPartner, Divly.
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
										/>
										{"        "}
										<Image
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/lisovenko.jpg?v=2021-02-02T11:26:45.639Z"
											border-radius="100%"
											width="90px"
											height="90px"
											srcSet="https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/lisovenko.jpg?v=2021-02-02T11%3A26%3A45.639Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/lisovenko.jpg?v=2021-02-02T11%3A26%3A45.639Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/lisovenko.jpg?v=2021-02-02T11%3A26%3A45.639Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/lisovenko.jpg?v=2021-02-02T11%3A26%3A45.639Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/lisovenko.jpg?v=2021-02-02T11%3A26%3A45.639Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/lisovenko.jpg?v=2021-02-02T11%3A26%3A45.639Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/lisovenko.jpg?v=2021-02-02T11%3A26%3A45.639Z&quality=85&w=3200 3200w"
											sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1280px) 100vw,100vw"
										/>
										<Text
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
										>
											Олег Лисовенко
										</Text>
										<Text
											margin="0px 0px 0px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
										>
											Менеджер проектов Divly, uSocial
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
											align-items="flex-start"
										/>
										{"        "}
										<Image
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/pavlov.jpg?v=2021-02-02T11:26:45.643Z"
											border-radius="100%"
											width="90px"
											height="90px"
											margin="0px 0px 24px 0px"
											srcSet="https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/pavlov.jpg?v=2021-02-02T11%3A26%3A45.643Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/pavlov.jpg?v=2021-02-02T11%3A26%3A45.643Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/pavlov.jpg?v=2021-02-02T11%3A26%3A45.643Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/pavlov.jpg?v=2021-02-02T11%3A26%3A45.643Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/pavlov.jpg?v=2021-02-02T11%3A26%3A45.643Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/pavlov.jpg?v=2021-02-02T11%3A26%3A45.643Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/pavlov.jpg?v=2021-02-02T11%3A26%3A45.643Z&quality=85&w=3200 3200w"
											sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1280px) 100vw,100vw"
										/>
										<Text
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
										>
											Олег Павлов
										</Text>
										<Text
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 0px 0px"
											display="inline-block"
										>
											SMM и direct-маркетолог
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
										/>
										{"        "}
										<Image
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/kuznetcov.jpg?v=2021-02-02T11:26:45.640Z"
											border-radius="100%"
											width="90px"
											srcSet="https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kuznetcov.jpg?v=2021-02-02T11%3A26%3A45.640Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kuznetcov.jpg?v=2021-02-02T11%3A26%3A45.640Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kuznetcov.jpg?v=2021-02-02T11%3A26%3A45.640Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kuznetcov.jpg?v=2021-02-02T11%3A26%3A45.640Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kuznetcov.jpg?v=2021-02-02T11%3A26%3A45.640Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kuznetcov.jpg?v=2021-02-02T11%3A26%3A45.640Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kuznetcov.jpg?v=2021-02-02T11%3A26%3A45.640Z&quality=85&w=3200 3200w"
											sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1280px) 100vw,100vw"
										/>
										<Text
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
										>
											Виктор Кузнецов
										</Text>
										<Text
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 0px 0px"
											display="inline-block"
										>
											Руководитель службы технической поддержки
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
										/>
										{"        "}
										<Box
											width="90px"
											height="90px"
											border-radius="50%"
											background="#3D72CC"
											display="flex"
											align-items="center"
											justify-content="center"
											margin="0px 0px 24px 0px"
										>
											<Text font="500 36px 'AvenirNextCyrBold', sans-serif" color="#ffffff">
												+15
											</Text>
										</Box>
										<Text
											color="#3D72CC"
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
										>
											специалистов
										</Text>
										{"    "}
									</StackItem>
									{"        "}
								</Stack>
							</Components.TabPanel>
							<Components.TabPanel tabId="three">
								<Stack margin="40px 0px 0px 0px">
									<StackItem width="40%" display="flex" lg-width="100%" sm-width="100%">
										<Override
											slot="StackItemContent"
											lg-align-items="center"
											lg-justify-content="center"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
										/>
										{"        "}
										<Text
											text-align="center"
											letter-spacing="0.3px"
											color="#3D72CC"
											font="normal 400 30px/36px 'AvenirNextCyrBold', sans-serif"
											margin="0px 0px 18px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
										>
											59 сотрудников
										</Text>
										<Text
											font="normal 400 18px/26px 'AvenirNextCyrMedium', sans-serif"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											lg-text-align="center"
											margin="0px 0px 5px 0px"
											display="inline-block"
											letter-spacing="0.3px"
											color="#9BABBF"
										>
											В ростовском офисе самая большая команда. Тут разрабатываются проекты uKit, uCalc, uLanding, uWeb и Web Tycoon.
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											lg-align-items="center"
											lg-justify-content="center"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
										/>
										{"        "}
										<Image
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/kudinov.jpg?v=2021-02-03T10:12:38.861Z"
											border-radius="100%"
											width="90px"
											height="90px"
											srcSet="https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kudinov.jpg?v=2021-02-03T10%3A12%3A38.861Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kudinov.jpg?v=2021-02-03T10%3A12%3A38.861Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kudinov.jpg?v=2021-02-03T10%3A12%3A38.861Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kudinov.jpg?v=2021-02-03T10%3A12%3A38.861Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kudinov.jpg?v=2021-02-03T10%3A12%3A38.861Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kudinov.jpg?v=2021-02-03T10%3A12%3A38.861Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kudinov.jpg?v=2021-02-03T10%3A12%3A38.861Z&quality=85&w=3200 3200w"
											sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1280px) 100vw,100vw"
										/>
										<Text
											letter-spacing="0.3px"
											color="#3D72CC"
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
										>
											Павел Кудинов
										</Text>
										<Text
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 0px 0px"
											display="inline-block"
										>
											Технический директор uKit, Руководитель uKit AI
										</Text>
										{"    "}
									</StackItem>
									<StackItem display="flex" lg-width="50%" sm-width="100%" width="20%">
										<Override
											slot="StackItemContent"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
											align-items="flex-start"
										/>
										{"        "}
										<Image
											width="90px"
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/zhukova.jpg?v=2021-02-03T10:12:38.858Z"
											border-radius="100%"
											srcSet="https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/zhukova.jpg?v=2021-02-03T10%3A12%3A38.858Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/zhukova.jpg?v=2021-02-03T10%3A12%3A38.858Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/zhukova.jpg?v=2021-02-03T10%3A12%3A38.858Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/zhukova.jpg?v=2021-02-03T10%3A12%3A38.858Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/zhukova.jpg?v=2021-02-03T10%3A12%3A38.858Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/zhukova.jpg?v=2021-02-03T10%3A12%3A38.858Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/zhukova.jpg?v=2021-02-03T10%3A12%3A38.858Z&quality=85&w=3200 3200w"
											sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1280px) 100vw,100vw"
										/>
										<Text
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
										>
											Татьяна Жукова
											<br />
										</Text>
										<Text
											letter-spacing="0.3px"
											color="#9BABBF"
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 0px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
										>
											Руководитель
											<br />
											отдела локализации
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
											align-items="flex-start"
										/>
										{"        "}
										<Image
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/mudrov.jpg?v=2021-02-03T10:12:38.864Z"
											border-radius="100%"
											width="90px"
											srcSet="https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/mudrov.jpg?v=2021-02-03T10%3A12%3A38.864Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/mudrov.jpg?v=2021-02-03T10%3A12%3A38.864Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/mudrov.jpg?v=2021-02-03T10%3A12%3A38.864Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/mudrov.jpg?v=2021-02-03T10%3A12%3A38.864Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/mudrov.jpg?v=2021-02-03T10%3A12%3A38.864Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/mudrov.jpg?v=2021-02-03T10%3A12%3A38.864Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/mudrov.jpg?v=2021-02-03T10%3A12%3A38.864Z&quality=85&w=3200 3200w"
											sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1280px) 100vw,100vw"
										/>
										<Text
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
										>
											Евгений Мудров
											<br />
										</Text>
										<Text
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 0px 0px"
											display="inline-block"
										>
											Разработчик ядра uKit AI
											<br />
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											lg-align-items="center"
											lg-justify-content="center"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
										/>
										{"        "}
										<Image
											width="90px"
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/derbitov.jpg?v=2021-02-03T10:12:38.858Z"
											border-radius="100%"
											srcSet="https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/derbitov.jpg?v=2021-02-03T10%3A12%3A38.858Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/derbitov.jpg?v=2021-02-03T10%3A12%3A38.858Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/derbitov.jpg?v=2021-02-03T10%3A12%3A38.858Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/derbitov.jpg?v=2021-02-03T10%3A12%3A38.858Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/derbitov.jpg?v=2021-02-03T10%3A12%3A38.858Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/derbitov.jpg?v=2021-02-03T10%3A12%3A38.858Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/derbitov.jpg?v=2021-02-03T10%3A12%3A38.858Z&quality=85&w=3200 3200w"
											sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1280px) 100vw,100vw"
										/>
										<Text
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
										>
											Андрей Дербитов
										</Text>
										<Text
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 0px 0px"
											display="inline-block"
											sm-text-align="center"
										>
											Старший разработчик uLanding
										</Text>
										{"    "}
									</StackItem>
									<StackItem display="flex" lg-width="50%" sm-width="100%" width="20%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
										/>
										{"        "}
										<Image
											width="90px"
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/kadnikov.jpg?v=2021-02-03T10:12:38.858Z"
											border-radius="100%"
											srcSet="https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kadnikov.jpg?v=2021-02-03T10%3A12%3A38.858Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kadnikov.jpg?v=2021-02-03T10%3A12%3A38.858Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kadnikov.jpg?v=2021-02-03T10%3A12%3A38.858Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kadnikov.jpg?v=2021-02-03T10%3A12%3A38.858Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kadnikov.jpg?v=2021-02-03T10%3A12%3A38.858Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kadnikov.jpg?v=2021-02-03T10%3A12%3A38.858Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kadnikov.jpg?v=2021-02-03T10%3A12%3A38.858Z&quality=85&w=3200 3200w"
											sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1280px) 100vw,100vw"
										/>
										<Text
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
										>
											Виктор Кадников
										</Text>
										<Text
											margin="0px 0px 0px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
										>
											Арт-директор uKit
											<br />
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
										/>
										{"        "}
										<Box
											justify-content="center"
											margin="0px 0px 24px 0px"
											width="90px"
											height="90px"
											border-radius="50%"
											background="#3D72CC"
											display="flex"
											align-items="center"
										>
											<Text font="500 36px 'AvenirNextCyrBold', sans-serif" color="#ffffff">
												+54
											</Text>
										</Box>
										<Text
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
										>
											специалистов
										</Text>
										{"    "}
									</StackItem>
									{"        "}
								</Stack>
							</Components.TabPanel>
							<Components.TabPanel tabId="four">
								<Stack margin="40px 0px 0px 0px">
									<StackItem width="40%" display="flex" lg-width="100%" sm-width="100%">
										<Override
											slot="StackItemContent"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
											align-items="flex-start"
											justify-content="flex-start"
										/>
										{"        "}
										<Text
											text-align="center"
											letter-spacing="0.3px"
											color="#3D72CC"
											font="normal 400 30px/36px 'AvenirNextCyrBold', sans-serif"
											margin="0px 0px 18px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
										>
											23 сотрудников
										</Text>
										<Text
											margin="0px 0px 5px 0px"
											display="inline-block"
											sm-margin="0px 0px 30px 0px"
											letter-spacing="0.3px"
											color="#9BABBF"
											font="normal 400 18px/26px 'AvenirNextCyrMedium', sans-serif"
											sm-text-align="center"
											text-align="left"
											lg-text-align="center"
										>
											Исторически самый первый офис компании. Здесь разрабатывается легендарный uCoz, а также uID.me и uShop.
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											lg-align-items="center"
											lg-justify-content="center"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
										/>
										{"        "}
										<Image
											width="90px"
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/kolpakov.jpg?v=2021-02-03T12:07:48.618Z"
											border-radius="100%"
											srcSet="https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kolpakov.jpg?v=2021-02-03T12%3A07%3A48.618Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kolpakov.jpg?v=2021-02-03T12%3A07%3A48.618Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kolpakov.jpg?v=2021-02-03T12%3A07%3A48.618Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kolpakov.jpg?v=2021-02-03T12%3A07%3A48.618Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kolpakov.jpg?v=2021-02-03T12%3A07%3A48.618Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kolpakov.jpg?v=2021-02-03T12%3A07%3A48.618Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/kolpakov.jpg?v=2021-02-03T12%3A07%3A48.618Z&quality=85&w=3200 3200w"
											sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1280px) 100vw,100vw"
										/>
										<Text
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
										>
											Иван Колпаков
										</Text>
										<Text
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 0px 0px"
										>
											Технический директор uCoz
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
											align-items="flex-start"
											justify-content="flex-start"
										/>
										{"        "}
										<Image
											border-radius="100%"
											width="90px"
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/donets.jpg?v=2021-02-03T12:07:48.614Z"
											srcSet="https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/donets.jpg?v=2021-02-03T12%3A07%3A48.614Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/donets.jpg?v=2021-02-03T12%3A07%3A48.614Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/donets.jpg?v=2021-02-03T12%3A07%3A48.614Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/donets.jpg?v=2021-02-03T12%3A07%3A48.614Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/donets.jpg?v=2021-02-03T12%3A07%3A48.614Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/donets.jpg?v=2021-02-03T12%3A07%3A48.614Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/donets.jpg?v=2021-02-03T12%3A07%3A48.614Z&quality=85&w=3200 3200w"
											sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1280px) 100vw,100vw"
										/>
										<Text
											letter-spacing="0.3px"
											color="#3D72CC"
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
										>
											Алексей Донец
										</Text>
										<Text
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 0px 0px"
											display="inline-block"
										>
											Интернет-маркетолог,
											<br />
											SEO-специалист
										</Text>
										{"    "}
									</StackItem>
									<StackItem sm-width="100%" width="20%" display="flex" lg-width="50%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
										/>
										{"        "}
										<Image
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/latanuk.jpg?v=2021-02-03T12:07:48.614Z"
											border-radius="100%"
											width="90px"
											height="90px"
											srcSet="https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/latanuk.jpg?v=2021-02-03T12%3A07%3A48.614Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/latanuk.jpg?v=2021-02-03T12%3A07%3A48.614Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/latanuk.jpg?v=2021-02-03T12%3A07%3A48.614Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/latanuk.jpg?v=2021-02-03T12%3A07%3A48.614Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/latanuk.jpg?v=2021-02-03T12%3A07%3A48.614Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/latanuk.jpg?v=2021-02-03T12%3A07%3A48.614Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/latanuk.jpg?v=2021-02-03T12%3A07%3A48.614Z&quality=85&w=3200 3200w"
											sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1280px) 100vw,100vw"
										/>
										<Text
											letter-spacing="0.3px"
											color="#3D72CC"
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
										>
											Иван Латанюк
										</Text>
										<Text
											margin="0px 0px 0px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
										>
											Старший разработчик uCoz, uID.me
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
										/>
										{"        "}
										<Image
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/pereyaslovets.jpg?v=2021-02-03T12:07:48.623Z"
											border-radius="100%"
											width="90px"
											height="90px"
											margin="0px 0px 24px 0px"
											srcSet="https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/pereyaslovets.jpg?v=2021-02-03T12%3A07%3A48.623Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/pereyaslovets.jpg?v=2021-02-03T12%3A07%3A48.623Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/pereyaslovets.jpg?v=2021-02-03T12%3A07%3A48.623Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/pereyaslovets.jpg?v=2021-02-03T12%3A07%3A48.623Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/pereyaslovets.jpg?v=2021-02-03T12%3A07%3A48.623Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/pereyaslovets.jpg?v=2021-02-03T12%3A07%3A48.623Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/pereyaslovets.jpg?v=2021-02-03T12%3A07%3A48.623Z&quality=85&w=3200 3200w"
											sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1280px) 100vw,100vw"
										/>
										<Text
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
										>
											Наталья Переясловец
											<br />
										</Text>
										<Text
											letter-spacing="0.3px"
											color="#9BABBF"
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 0px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
										>
											Старший QA-инженер
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
										/>
										{"        "}
										<Image
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/chubenko.jpg?v=2021-02-03T12:07:48.638Z"
											border-radius="100%"
											width="90px"
											height="90px"
											srcSet="https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/chubenko.jpg?v=2021-02-03T12%3A07%3A48.638Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/chubenko.jpg?v=2021-02-03T12%3A07%3A48.638Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/chubenko.jpg?v=2021-02-03T12%3A07%3A48.638Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/chubenko.jpg?v=2021-02-03T12%3A07%3A48.638Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/chubenko.jpg?v=2021-02-03T12%3A07%3A48.638Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/chubenko.jpg?v=2021-02-03T12%3A07%3A48.638Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/chubenko.jpg?v=2021-02-03T12%3A07%3A48.638Z&quality=85&w=3200 3200w"
											sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1280px) 100vw,100vw"
										/>
										<Text
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
										>
											Игорь Чубенко
										</Text>
										<Text
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 0px 0px"
											display="inline-block"
											sm-text-align="center"
										>
											Старший разработчик uShop
										</Text>
										{"    "}
									</StackItem>
									<StackItem sm-width="100%" width="20%" display="flex" lg-width="50%">
										<Override
											slot="StackItemContent"
											lg-align-items="center"
											lg-justify-content="center"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
										/>
										{"        "}
										<Box
											justify-content="center"
											margin="0px 0px 24px 0px"
											width="90px"
											height="90px"
											border-radius="50%"
											background="#3D72CC"
											display="flex"
											align-items="center"
										>
											<Text font="500 36px 'AvenirNextCyrBold', sans-serif" color="#ffffff">
												+18
											</Text>
										</Box>
										<Text
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
										>
											специалистов
										</Text>
										{"    "}
									</StackItem>
									{"        "}
								</Stack>
							</Components.TabPanel>
						</Components.TabPanels>
					</Components.Tabs>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="60px 0 75px 0" background="#3D72CC" md-padding="40px 0 40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Stack margin="0px 0px 0px 0px" max-width="1170px" width="100%" gap="--cmp-stack-gap-default">
				{"    "}
				<StackItem
					display="flex"
					sm-width="100%"
					md-width="100%"
					md-margin="0px 0px 17px 0px"
					width="33.333%"
				>
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" flex-direction="column" />
					<Text font="42px/28px 'AvenirNextCyrBold', sans-serif" margin="0px 0px 16px 0px" color="#fff">
						от 3-x лет
					</Text>
					<Text font="18px/28px 'AvenirNextCyrMedium', sans-serif" margin="8px 0px 0px 0px" text-align="center" color="#fff">
						опыта на своей позиции у каждого ключевого участника команды
					</Text>
					{"            "}
				</StackItem>
				<StackItem
					md-margin="0px 0px 17px 0px"
					width="33.333%"
					display="flex"
					sm-width="100%"
					md-width="100%"
				>
					<Override slot="StackItemContent" justify-content="flex-start" flex-direction="column" align-items="center" />
					<Text font="42px/28px 'AvenirNextCyrBold', sans-serif" margin="0px 0px 16px 0px" color="#fff">
						18 лет
					</Text>
					<Text font="18px/28px 'AvenirNextCyrMedium', sans-serif" margin="8px 0px 0px 0px" text-align="center" color="#fff">
						на рынке SaaS-решений для создания сайтов и оптимизации их конверсии
					</Text>
					{"            "}
				</StackItem>
				<StackItem
					md-width="100%"
					md-margin="0px 0px 17px 0px"
					width="33.333%"
					display="flex"
					sm-width="100%"
				>
					<Override slot="StackItemContent" justify-content="flex-start" flex-direction="column" align-items="center" />
					<Text font="42px/28px 'AvenirNextCyrBold', sans-serif" margin="0px 0px 16px 0px" color="#fff">
						7 проектов
					</Text>
					<Text font="18px/28px 'AvenirNextCyrMedium', sans-serif" margin="8px 0px 0px 0px" text-align="center" color="#fff">
						выпущены совместно и успешно работают
						<br />
					</Text>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="60px 0 80px 0" sm-padding="30px 0 40px 0" background="#eef2f3">
			<Override slot="SectionContent" align-items="center" />
			<Stack margin="0px 0px 0px 0px" max-width="975px" width="100%">
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					{"        "}
					<Text
						display="inline-block"
						sm-text-align="center"
						sm-font="normal 500 24px/30px 'AvenirNextCyrBold', sans-serif"
						sm-margin="0px 0px 0px 0px"
						md-margin="0px 0px 0px 0px"
						font="normal 500 36px/40px 'AvenirNextCyrBold', sans-serif"
						margin="0px 0px 40px 0px"
					>
						Последние новости из блогов
						<br />
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack max-width="1170px" width="100%" margin="10px 0px 0px 0px">
				{"        "}
				<StackItem width="50%" display="flex" sm-width="100%" md-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						padding="0px 0px 0px 0px"
						md-align-items="center"
						align-items="flex-start"
						justify-content="flex-start"
					/>
					<Link href="https://blog.ucoz.ru/" target="_blank">
						<Image margin="0px 0px 0px 0px" src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/ucozuco.svg?v=2021-02-03T15:17:23.120Z" />
					</Link>
					{"            "}
				</StackItem>
				<StackItem
					md-width="100%"
					md-order="1"
					width="50%"
					display="flex"
					sm-width="100%"
				>
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="column"
						padding="0px 0px 0px 0px"
						md-align-items="center"
					/>
					<Link href="https://blog-ru.ukit.com/" target="_blank">
						<Image margin="0px 0px 0px 0px" src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/ukituco.svg?v=2021-02-03T15:44:44.464Z" />
					</Link>
					{"            "}
				</StackItem>
				<StackItem width="50%" display="flex" sm-width="100%" md-width="100%">
					<Override
						slot="StackItemContent"
						background="#ffffff"
						padding="20px 20px 30px 20px"
						align-items="flex-start"
						justify-content="space-between"
						flex-direction="column"
					/>
					<Image
						width="100%"
						margin="0px 0px 18px 0px"
						height="100%"
						max-height="146px"
						src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/14828273.jpg?v=2021-02-03T13:44:49.980Z"
						srcSet="https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/14828273.jpg?v=2021-02-03T13%3A44%3A49.980Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/14828273.jpg?v=2021-02-03T13%3A44%3A49.980Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/14828273.jpg?v=2021-02-03T13%3A44%3A49.980Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/14828273.jpg?v=2021-02-03T13%3A44%3A49.980Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/14828273.jpg?v=2021-02-03T13%3A44%3A49.980Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/14828273.jpg?v=2021-02-03T13%3A44%3A49.980Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/14828273.jpg?v=2021-02-03T13%3A44%3A49.980Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1280px) 100vw,100vw"
					/>
					<Text nout-font="20px/23px 'AvenirNextCyrMedium', sans-serif" sm-font="16px/20px 'AvenirNextCyrMedium', sans-serif" margin="0px 0px 12px 0px" font="20px/28px 'AvenirNextCyrMedium', sans-serif">
						С Наступающим Новым годом!
					</Text>
					<Link
						font="20px/28px 'AvenirNextCyrMedium', sans-serif"
						hover-text-decoration-line="underline"
						md-margin="20px 0px 0px 0px"
						sm-margin="20px 0px 0px 0px"
						href="https://blog.ucoz.ru/ucoz/new-year-2021"
						text-decoration-line="initial"
						transition="all 0.2s ease 0s"
						nout-margin="20px 0px 0px 0px"
						color="#4A8CFA"
						target="_blank"
					>
						Читать далее
					</Link>
					{"            "}
				</StackItem>
				<StackItem
					width="50%"
					display="flex"
					sm-width="100%"
					md-width="100%"
					md-order="1"
				>
					<Override
						slot="StackItemContent"
						justify-content="space-between"
						flex-direction="column"
						background="#ffffff"
						padding="20px 20px 30px 20px"
						align-items="flex-start"
					/>
					<Image
						margin="0px 0px 18px 0px"
						height="100%"
						max-height="146px"
						src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/20886398%20(1).png?v=2021-02-03T15:47:32.977Z"
						width="100%"
						srcSet="https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/20886398%20(1).png?v=2021-02-03T15%3A47%3A32.977Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/20886398%20(1).png?v=2021-02-03T15%3A47%3A32.977Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/20886398%20(1).png?v=2021-02-03T15%3A47%3A32.977Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/20886398%20(1).png?v=2021-02-03T15%3A47%3A32.977Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/20886398%20(1).png?v=2021-02-03T15%3A47%3A32.977Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/20886398%20(1).png?v=2021-02-03T15%3A47%3A32.977Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/20886398%20(1).png?v=2021-02-03T15%3A47%3A32.977Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1280px) 100vw,100vw"
					/>
					<Text margin="0px 0px 12px 0px" font="20px/28px 'AvenirNextCyrMedium', sans-serif" nout-font="20px/23px 'AvenirNextCyrMedium', sans-serif" sm-font="16px/20px 'AvenirNextCyrMedium', sans-serif">
						Подводим итоги 2020 и встречаем Новый год со скидками!
					</Text>
					<Link
						nout-margin="20px 0px 0px 0px"
						href="https://blog-ru.ukit.com/newsline/new-year-2021"
						text-decoration-line="initial"
						color="#4A8CFA"
						font="20px/28px 'AvenirNextCyrMedium', sans-serif"
						target="_blank"
						hover-text-decoration-line="underline"
						transition="all 0.2s ease 0s"
					>
						Читать далее
					</Link>
					{"            "}
				</StackItem>
				<StackItem width="50%" display="flex" sm-width="100%" md-width="100%">
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="space-between"
						flex-direction="column"
						background="#ffffff"
						padding="20px 20px 30px 20px"
					/>
					<Image
						width="100%"
						margin="0px 0px 18px 0px"
						height="100%"
						max-height="146px"
						src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/57744999.png?v=2021-02-03T15:47:32.979Z"
						srcSet="https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/57744999.png?v=2021-02-03T15%3A47%3A32.979Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/57744999.png?v=2021-02-03T15%3A47%3A32.979Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/57744999.png?v=2021-02-03T15%3A47%3A32.979Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/57744999.png?v=2021-02-03T15%3A47%3A32.979Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/57744999.png?v=2021-02-03T15%3A47%3A32.979Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/57744999.png?v=2021-02-03T15%3A47%3A32.979Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/57744999.png?v=2021-02-03T15%3A47%3A32.979Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1280px) 100vw,100vw"
					/>
					<Text margin="0px 0px 12px 0px" font="20px/28px 'AvenirNextCyrMedium', sans-serif" nout-font="20px/23px 'AvenirNextCyrMedium', sans-serif" sm-font="16px/20px 'AvenirNextCyrMedium', sans-serif">
						Нам 15 лет! Празднуем и ностальгируем вместе!
					</Text>
					<Link
						text-decoration-line="initial"
						color="#4A8CFA"
						font="20px/28px 'AvenirNextCyrMedium', sans-serif"
						target="_blank"
						hover-text-decoration-line="underline"
						transition="all 0.2s ease 0s"
						nout-margin="20px 0px 0px 0px"
						href="https://blog.ucoz.ru/ucoz/15-years"
					>
						Читать далее
					</Link>
					{"            "}
				</StackItem>
				<StackItem
					display="flex"
					sm-width="100%"
					md-width="100%"
					md-order="1"
					width="50%"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						background="#ffffff"
						padding="20px 20px 30px 20px"
						align-items="flex-start"
						justify-content="space-between"
					/>
					<Image
						max-height="146px"
						src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/05479122.png?v=2021-02-03T15:47:52.340Z"
						width="100%"
						margin="0px 0px 18px 0px"
						height="100%"
						srcSet="https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/05479122.png?v=2021-02-03T15%3A47%3A52.340Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/05479122.png?v=2021-02-03T15%3A47%3A52.340Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/05479122.png?v=2021-02-03T15%3A47%3A52.340Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/05479122.png?v=2021-02-03T15%3A47%3A52.340Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/05479122.png?v=2021-02-03T15%3A47%3A52.340Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/05479122.png?v=2021-02-03T15%3A47%3A52.340Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/05479122.png?v=2021-02-03T15%3A47%3A52.340Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1280px) 100vw,100vw"
					/>
					<Text margin="0px 0px 12px 0px" font="20px/28px 'AvenirNextCyrMedium', sans-serif" nout-font="20px/23px 'AvenirNextCyrMedium', sans-serif" sm-font="16px/20px 'AvenirNextCyrMedium', sans-serif">
						Большое обновление виджетов и новые шаблоны
					</Text>
					<Link
						color="#4A8CFA"
						font="20px/28px 'AvenirNextCyrMedium', sans-serif"
						target="_blank"
						hover-text-decoration-line="underline"
						transition="all 0.2s ease 0s"
						nout-margin="20px 0px 0px 0px"
						href="https://blog-ru.ukit.com/updates/new-templates-and-widgets"
						text-decoration-line="initial"
					>
						Читать далее
					</Link>
					{"            "}
				</StackItem>
			</Stack>
		</Section>
		<Section padding="40px 0 40px 0">
			<Stack margin="10px 0px 0px 0px" max-width="1170px" width="100%">
				{"        "}
				<StackItem width="50%" display="flex" sm-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="row"
						align-items="flex-start"
						sm-align-items="center"
						sm-justify-content="center"
					/>
					<Link
						href="https://www.instagram.com/ucoz_ru/"
						display="flex"
						target="_blank"
						transition="color 0.2s ease 0s"
						font="18px 'AvenirNextCyrMedium', sans-serif"
						align-items="center"
						text-decoration-line="initial"
						color="#263238"
						hover-color="#4A8CFA"
					>
						<Icon icon={FaInstagram} margin="-1px 12px 0px 0px" category="fa" />
						<Text margin="0px 0px 0px 0px">
							Жизнь команды в Instagram
						</Text>
					</Link>
					{"            "}
				</StackItem>
				<StackItem sm-width="100%" width="50%" display="flex">
					<Override
						slot="StackItemContent"
						flex-direction="row"
						align-items="center"
						justify-content="flex-end"
						sm-justify-content="center"
					/>
					<Link
						href="https://vk.com/ucoz"
						text-decoration-line="initial"
						font="18px 'AvenirNextCyrMedium', sans-serif"
						transition="color 0.2s ease 0s"
						hover-color="#4A8CFA"
						target="_blank"
						margin="0px 24px 0px 0px"
						display="flex"
						align-items="center"
						flex-direction="column"
						justify-content="center"
						color="#263238"
					>
						uCoz в ВК
						<Image
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/ucoz.png?v=2021-02-01T22:05:06.991Z"
							margin="18px 0px 0px 0px"
							width="100px"
							height="100px"
							srcSet="https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/ucoz.png?v=2021-02-01T22%3A05%3A06.991Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/ucoz.png?v=2021-02-01T22%3A05%3A06.991Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/ucoz.png?v=2021-02-01T22%3A05%3A06.991Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/ucoz.png?v=2021-02-01T22%3A05%3A06.991Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/ucoz.png?v=2021-02-01T22%3A05%3A06.991Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/ucoz.png?v=2021-02-01T22%3A05%3A06.991Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/ucoz.png?v=2021-02-01T22%3A05%3A06.991Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1280px) 100vw,100vw"
						/>
					</Link>
					<Link
						transition="color 0.2s ease 0s"
						target="_blank"
						href="https://vk.com/ukitcom"
						align-items="center"
						justify-content="center"
						color="#263238"
						font="18px 'AvenirNextCyrMedium', sans-serif"
						hover-color="#4A8CFA"
						display="flex"
						flex-direction="column"
						text-decoration-line="initial"
					>
						uKit в ВК
						<Image
							width="100px"
							height="100px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/5.png?v=2021-01-28T01:00:02.248Z"
							margin="18px 0px 0px 0px"
							srcSet="https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/5.png?v=2021-01-28T01%3A00%3A02.248Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/5.png?v=2021-01-28T01%3A00%3A02.248Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/5.png?v=2021-01-28T01%3A00%3A02.248Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/5.png?v=2021-01-28T01%3A00%3A02.248Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/5.png?v=2021-01-28T01%3A00%3A02.248Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/5.png?v=2021-01-28T01%3A00%3A02.248Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/600e0aca11b69c001f4aa723/images/5.png?v=2021-01-28T01%3A00%3A02.248Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1280px) 100vw,100vw"
						/>
					</Link>
					{"            "}
				</StackItem>
			</Stack>
		</Section>
		<Components.Footer />
		<Components.Header />
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