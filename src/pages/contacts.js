import React from "react";
import theme from "theme";
import { Theme, Text, Section, Button, Box, Link, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack, GoogleMap } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"contacts"} />
		<Helmet>
			<title>
				Контакт - Работа в uTeam
			</title>
			<meta name={"description"} content={"Вакансии в uCoz. Все вакансии компании по направлениям и проектам. В офисах в Москве, Санкт-Петербурге, Ростове-на-Дону. Удаленная работа."} />
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
		<Section padding="150px 0 80px 0" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/1.jpg?v=2021-01-28T13:22:17.962Z) 0% 0% /cover repeat scroll padding-box">
			<Override slot="SectionContent" align-items="center" />
			<Stack margin="0px 0px 0px 0px" max-width="850px">
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					{"        "}
					<Text
						font="normal 900 64px/1.2 'AvenirNextCyrDemi', sans-serif"
						margin="0px 0px 5px 0px"
						display="inline-block"
						sm-text-align="center"
						sm-margin="0px 0px 30px 0px"
						text-align="center"
						color="#ffffff"
					>
						Контакты
						<br />
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="30px 0 40px 0" sm-padding="40px 0 40px 0" lg-padding="40px 0 40px 0" md-padding="40px 0 40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Stack margin="0px 0px 0px 0px" max-width="1170px" width="100%">
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" />
					{"        "}
					<Text
						sm-text-align="center"
						sm-margin="0px 0px 30px 0px"
						text-align="center"
						color="#263238"
						font="normal 400 36px/36px 'AvenirNextCyrRegular', sans-serif"
						margin="0px 0px 0px 0px"
						display="inline-block"
					>
						Мы будем рады видеть вас!
						<br />
					</Text>
					<Text
						font="normal 400 20px/28px 'AvenirNextCyrRegular', sans-serif"
						margin="18px 0px 0px 0px"
						display="inline-block"
						sm-text-align="center"
						sm-margin="0px 0px 30px 0px"
						color="#333"
					>
						Убедительная просьба сообщать о визите заранее
						<br />
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack margin="0px 0px 0px 0px" max-width="1170px" width="100%">
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" />
					<Components.Tabs defaultTab="one" orientation="Horizontal" width="100%" height="auto">
						<Components.TabList sm-width="100%" sm-display="flex" sm-flex-direction="column">
							<Override slot="TabList Wrapper" sm-flex-direction="column" />
							<Components.TabItem tabId="one" color="#263238" transition="all 0.2s linear 0s">
								<Override
									slot="Selected Tab"
									color="#4a8cfa"
									border-width="2px"
									border-style="solid"
									border-color="#4a8cfa"
								/>
								<Override
									slot="Tab"
									border-width="2px"
									border-style="solid"
									color="inherit"
									transition="all 0.2s linear 0s"
									border-color="rgba(74, 140, 250, 0)"
									border-radius="5px"
								/>
								<Button
									hover-color="#4a8cfa"
									focus-box-shadow="none"
									background="rgba(0, 119, 204, 0)"
									color="inherit"
									padding="8px 12px 8px 12px"
									font="normal 400 16px/22px 'AvenirNextCyrMedium'"
									transition="all 0.2s linear 0s"
								>
									Баку
								</Button>
							</Components.TabItem>
							<Components.TabItem
								color="#263238"
								border-color="#263238"
								transition="all 0.2s linear 0s"
								tabId="two"
								display="none"
							>
								<Override
									slot="Selected Tab"
									color="#4a8cfa"
									border-width="2px"
									border-style="solid"
									border-color="#4a8cfa"
								/>
								<Override
									slot="Tab"
									border-color="rgba(0, 0, 0, 0)"
									transition="all 0.2s linear 0s"
									border-radius="5px"
									border-width="2px"
									border-style="solid"
								/>
								<Button
									padding="8px 12px 8px 12px"
									font="normal 400 16px/22px 'AvenirNextCyrMedium'"
									border-width="0px"
									transition="all 0.2s linear 0s"
									hover-color="#4a8cfa"
									focus-box-shadow="none"
									background="rgba(0, 119, 204, 0)"
									color="inherit"
								>
									Санкт-Петербург
								</Button>
							</Components.TabItem>
							<Components.TabItem tabId="three" color="#263238" border-color="#263238" transition="all 0.2s linear 0s">
								<Override
									slot="Selected Tab"
									border-style="solid"
									border-color="#4a8cfa"
									color="#4a8cfa"
									border-width="2px"
								/>
								<Override
									slot="Tab"
									border-radius="5px"
									border-width="2px"
									border-style="solid"
									border-color="rgba(0, 0, 0, 0)"
									transition="all 0.2s linear 0s"
								/>
								<Button
									transition="all 0.2s linear 0s"
									hover-color="#4a8cfa"
									focus-box-shadow="none"
									background="rgba(0, 119, 204, 0)"
									color="inherit"
									padding="8px 12px 8px 12px"
									font="normal 400 16px/22px 'AvenirNextCyrMedium'"
									border-width="0px"
								>
									Ростов-на-Дону
								</Button>
							</Components.TabItem>
						</Components.TabList>
						<Components.TabPanels>
							<Components.TabPanel tabId="one">
								<GoogleMap sm-margin="15px 0px 20px 0px" query="г. Баку, проспект Гейдара Алиева, 205" margin="15px 0px 0px 0px" z-index="0" />
								<Box display="flex" margin="0px 0px 25px 0px" sm-flex-direction="column">
									<Box
										display="flex"
										flex-direction="column"
										align-items="flex-start"
										max-width="270px"
										width="100%"
									>
										<Text
											text-align="center"
											color="#333"
											font="normal 400 18px/22px 'AvenirNextCyrMedium'"
											margin="20px 0px 17px 0px"
											display="inline-block"
											sm-margin="0px 0px 30px 0px"
										>
											Прийти
										</Text>
										<Text
											font="normal 400 18px/22px 'AvenirNextCyrMedium'"
											display="inline-block"
											sm-margin="0px 0px 30px 0px"
											color="#333"
											margin="0px 0px 0px 0px"
										>
											г. Баку, проспект Гейдара Алиева, 205{"\n\n"}
										</Text>
									</Box>
									<Box display="flex" flex-direction="column" align-items="flex-start" max-width="300px">
										<Text
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="center"
											color="#333"
											margin="20px 0px 17px 0px"
											font="normal 400 18px/22px 'AvenirNextCyrMedium'"
										>
											Написать
											<Link href="mailto:job@ucoz.ru">
												<br />
											</Link>
										</Text>
										<Link
											href="malito:job@ucoz.ru"
											text-decoration-line="initial"
											color="#4a8cfa"
											font="normal 400 18px/24px 'AvenirNextCyrMedium'"
											transition="color 0.2s linear 0s"
											hover-color="#3d72cc"
										>
											job@ucoz.ru
										</Link>
									</Box>
								</Box>
								<Link
									href="/vacancies"
									color="#263238"
									padding="12px 15px 12px 15px"
									margin="0px 0px 0px 0px"
									border-radius="5px"
									background="#ffd83a"
									text-decoration-line="initial"
									font="16px/50px 'AvenirNextCyrMedium', sans-serif"
									transition="all 0.2s linear 0s"
									hover-background="#e6c235"
								>
									Смотреть все вакансии
								</Link>
							</Components.TabPanel>
							<Components.TabPanel tabId="two">
								<GoogleMap query=". г. Санкт-Петербург, пр. Московский, дом 22, литер Т" margin="15px 0px 0px 0px" z-index="0" sm-margin="15px 0px 20px 0px" />
								<Box display="flex" margin="0px 0px 25px 0px" sm-flex-direction="column">
									<Box
										display="flex"
										flex-direction="column"
										align-items="flex-start"
										max-width="270px"
										width="100%"
									>
										<Text
											font="normal 400 18px/22px 'AvenirNextCyrMedium'"
											margin="20px 0px 17px 0px"
											display="inline-block"
											sm-margin="0px 0px 30px 0px"
											text-align="center"
											color="#333"
										>
											Прийти
										</Text>
										<Text
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											color="#333"
											margin="0px 0px 0px 0px"
											font="normal 400 18px/22px 'AvenirNextCyrMedium'"
											display="inline-block"
										>
											пр. Московский, дом 22,
											<br />
											литер Т
										</Text>
									</Box>
									<Box display="flex" flex-direction="column" align-items="flex-start" max-width="300px">
										<Text
											color="#333"
											margin="20px 0px 17px 0px"
											font="normal 400 18px/22px 'AvenirNextCyrMedium'"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="center"
										>
											Написать
											<Link href="mailto:job@ucoz.ru">
												<br />
											</Link>
										</Text>
										<Link
											hover-color="#3d72cc"
											href="malito:job@ucoz.ru"
											text-decoration-line="initial"
											color="#4a8cfa"
											font="normal 400 18px/24px 'AvenirNextCyrMedium'"
											transition="color 0.2s linear 0s"
										>
											job@ucoz.ru
										</Link>
									</Box>
								</Box>
								<Link
									font="16px/50px 'AvenirNextCyrMedium', sans-serif"
									padding="12px 15px 12px 15px"
									margin="0px 0px 0px 0px"
									transition="all 0.2s linear 0s"
									hover-background="#e6c235"
									border-radius="5px"
									href="/vacancies"
									background="#ffd83a"
									text-decoration-line="initial"
									color="#263238"
								>
									Смотреть все вакансии
								</Link>
							</Components.TabPanel>
							<Components.TabPanel tabId="three">
								<GoogleMap
									query="Ростов-на-Дону, ул. Алексея Береста, 6"
									margin="15px 0px 0px 0px"
									lg-z-index="1"
									z-index="0"
									sm-margin="15px 0px 20px 0px"
								/>
								<Box display="flex" margin="0px 0px 25px 0px" sm-flex-direction="column">
									<Box
										width="100%"
										sm-max-width="none"
										display="flex"
										flex-direction="column"
										align-items="flex-start"
										max-width="270px"
									>
										<Text
											font="normal 400 18px/22px 'AvenirNextCyrMedium'"
											margin="20px 0px 17px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="center"
											color="#333"
										>
											Прийти
										</Text>
										<Text
											color="#333"
											margin="0px 0px 0px 0px"
											font="normal 400 18px/22px 'AvenirNextCyrMedium'"
											display="inline-block"
											sm-margin="0px 0px 30px 0px"
										>
											Ростов-на-Дону, ул. Алексея Береста, 6
										</Text>
									</Box>
									<Box max-width="300px" display="flex" flex-direction="column" align-items="flex-start">
										<Text
											color="#333"
											margin="20px 0px 17px 0px"
											font="normal 400 18px/22px 'AvenirNextCyrMedium'"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="center"
										>
											Написать
											<Link href="mailto:job@ucoz.ru">
												<br />
											</Link>
										</Text>
										<Link
											color="#4a8cfa"
											font="normal 400 18px/24px 'AvenirNextCyrMedium'"
											transition="color 0.2s linear 0s"
											hover-color="#3d72cc"
											href="malito:job@ucoz.ru"
											text-decoration-line="initial"
										>
											job@ucoz.ru
										</Link>
									</Box>
								</Box>
								<Link
									background="#ffd83a"
									text-decoration-line="initial"
									font="16px/50px 'AvenirNextCyrMedium', sans-serif"
									padding="12px 15px 12px 15px"
									transition="all 0.2s linear 0s"
									hover-background="#e6c235"
									href="/vacancies"
									color="#263238"
									margin="0px 0px 0px 0px"
									border-radius="5px"
								>
									Смотреть все вакансии
								</Link>
							</Components.TabPanel>
						</Components.TabPanels>
					</Components.Tabs>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack margin="30px 0px 0px 0px" max-width="1170px" width="100%">
				{"    "}
				<StackItem display="flex" width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" />
					{"        "}
					<Text
						font="normal 400 36px/36px 'AvenirNextCyrRegular', sans-serif"
						margin="0px 0px 0px 0px"
						display="inline-block"
						sm-text-align="center"
						sm-margin="0px 0px 30px 0px"
						text-align="center"
						color="#263238"
					>
						Документы
						<br />
					</Text>
					<Text
						sm-margin="0px 0px 30px 0px"
						text-align="left"
						color="#333"
						sm-font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif"
						font="normal 400 20px/28px 'AvenirNextCyrRegular', sans-serif"
						margin="18px 0px 25px 0px"
						display="inline-block"
					>
						Согласно ФЗ от 28 декабря 2013 г. N 426-ФЗ «О специальной оценке условий труда» статья 15 п.6. мы публикуем результаты специальной оценки условий труда в наших офисах
						<br />
					</Text>
					<Link
						color="#333"
						margin="0px 0px 12px 0px"
						target="_blank"
						display="flex"
						text-decoration-line="initial"
						transition="color 0.2s ease 0s"
						hover-color="#5F99FB"
						lg-margin="0px 0px 16px 0px"
						sm-margin="0px 0px 0px 0px"
						href="/documents/Exp_opinion_2018.pdf"
					>
						<Image
							width="24px"
							height="24px"
							margin="1px 12px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/document.svg?v=2021-01-28T21:23:13.010Z"
							lg-margin="3px 12px 0px 0px"
						/>
						<Text
							sm-margin="0px 0px 30px 0px"
							text-align="left"
							color="inherit"
							lg-font="normal 400 20px/30px 'AvenirNextCyrRegular', sans-serif"
							sm-font="normal 400 16px/30px 'AvenirNextCyrRegular', sans-serif"
							font="normal 400 20px/28px 'AvenirNextCyrRegular', sans-serif"
							margin="0px 0px 0px 0px"
							display="inline-block"
						>
							Заключение эксперта по результатам проведения оценки условий труда в московском офисе
						</Text>
					</Link>
					<Link
						transition="color 0.2s ease 0s"
						hover-color="#5F99FB"
						color="#333"
						sm-margin="0px 0px 0px 0px"
						href="/documents/list_of_measures_spb_2018.pdf"
						text-decoration-line="initial"
						margin="0px 0px 12px 0px"
						lg-margin="0px 0px 16px 0px"
						display="flex"
						target="_blank"
					>
						<Image
							margin="1px 12px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/document.svg?v=2021-01-28T21:23:13.010Z"
							lg-margin="3px 12px 0px 0px"
							width="24px"
							height="24px"
						/>
						<Text
							sm-margin="0px 0px 30px 0px"
							text-align="left"
							color="inherit"
							lg-font="normal 400 20px/30px 'AvenirNextCyrRegular', sans-serif"
							sm-font="normal 400 16px/30px 'AvenirNextCyrRegular', sans-serif"
							font="normal 400 20px/28px 'AvenirNextCyrRegular', sans-serif"
							margin="0px 0px 0px 0px"
							display="inline-block"
						>
							Перечень мероприятий по улучшению условий труда в санкт-петербургском офисе
						</Text>
					</Link>
					<Link
						margin="0px 0px 12px 0px"
						href="/documents/Summary_list_msk_2018.pdf"
						target="_blank"
						transition="color 0.2s ease 0s"
						hover-color="#5F99FB"
						color="#333"
						lg-margin="0px 0px 16px 0px"
						sm-margin="0px 0px 0px 0px"
						display="flex"
						text-decoration-line="initial"
					>
						<Image
							width="24px"
							height="24px"
							margin="1px 12px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/document.svg?v=2021-01-28T21:23:13.010Z"
							lg-margin="3px 12px 0px 0px"
						/>
						<Text
							lg-font="normal 400 20px/30px 'AvenirNextCyrRegular', sans-serif"
							sm-font="normal 400 16px/30px 'AvenirNextCyrRegular', sans-serif"
							font="normal 400 20px/28px 'AvenirNextCyrRegular', sans-serif"
							margin="0px 0px 0px 0px"
							display="inline-block"
							sm-margin="0px 0px 30px 0px"
							text-align="left"
							color="inherit"
						>
							Сводная ведомость результатов проведения условий труда в московском офисе
						</Text>
					</Link>
					<Link
						href="http://ru.uteam.pro/resources/documents/Summary_list_spb_2018.pdf"
						color="#333"
						sm-margin="0px 0px 0px 0px"
						display="flex"
						text-decoration-line="initial"
						target="_blank"
						transition="color 0.2s ease 0s"
						hover-color="#5F99FB"
						margin="0px 0px 12px 0px"
						lg-margin="0px 0px 16px 0px"
					>
						<Image
							width="24px"
							height="24px"
							margin="1px 12px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/document.svg?v=2021-01-28T21:23:13.010Z"
							lg-margin="3px 12px 0px 0px"
						/>
						<Text
							text-align="left"
							color="inherit"
							lg-font="normal 400 20px/30px 'AvenirNextCyrRegular', sans-serif"
							sm-font="normal 400 16px/30px 'AvenirNextCyrRegular', sans-serif"
							font="normal 400 20px/28px 'AvenirNextCyrRegular', sans-serif"
							margin="0px 0px 0px 0px"
							display="inline-block"
							sm-margin="0px 0px 30px 0px"
						>
							Сводная ведомость результатов проведения условий труда в санкт-пербургском офисе
						</Text>
					</Link>
					<Link
						text-decoration-line="initial"
						target="_blank"
						color="#333"
						lg-margin="0px 0px 16px 0px"
						sm-margin="0px 0px 0px 0px"
						href="/documents/event_list_msk.pdf"
						display="flex"
						transition="color 0.2s ease 0s"
						hover-color="#5F99FB"
						margin="0px 0px 12px 0px"
					>
						<Image
							height="24px"
							margin="1px 12px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/document.svg?v=2021-01-28T21:23:13.010Z"
							lg-margin="3px 12px 0px 0px"
							width="24px"
						/>
						<Text
							sm-font="normal 400 16px/30px 'AvenirNextCyrRegular', sans-serif"
							font="normal 400 20px/28px 'AvenirNextCyrRegular', sans-serif"
							margin="0px 0px 0px 0px"
							display="inline-block"
							sm-margin="0px 0px 30px 0px"
							text-align="left"
							color="inherit"
							lg-font="normal 400 20px/30px 'AvenirNextCyrRegular', sans-serif"
						>
							Перечень мероприятий по улучшению условий труда в московском офисе (2017)
						</Text>
					</Link>
					<Link
						display="flex"
						text-decoration-line="initial"
						target="_blank"
						hover-color="#5F99FB"
						margin="0px 0px 12px 0px"
						href="/documents/event_list_spb.pdf"
						color="#333"
						lg-margin="0px 0px 16px 0px"
						sm-margin="0px 0px 0px 0px"
						transition="color 0.2s ease 0s"
					>
						<Image
							width="24px"
							height="24px"
							margin="1px 12px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/document.svg?v=2021-01-28T21:23:13.010Z"
							lg-margin="3px 12px 0px 0px"
						/>
						<Text
							sm-font="normal 400 16px/30px 'AvenirNextCyrRegular', sans-serif"
							font="normal 400 20px/28px 'AvenirNextCyrRegular', sans-serif"
							margin="0px 0px 0px 0px"
							display="inline-block"
							sm-margin="0px 0px 30px 0px"
							text-align="left"
							color="inherit"
							lg-font="normal 400 20px/30px 'AvenirNextCyrRegular', sans-serif"
						>
							Перечень мероприятий по улучшению условий труда в санкт-петербургском офисе (2017)
						</Text>
					</Link>
					<Link
						display="flex"
						text-decoration-line="initial"
						target="_blank"
						margin="0px 0px 12px 0px"
						lg-margin="0px 0px 16px 0px"
						href="/documents/results_msk.pdf"
						transition="color 0.2s ease 0s"
						hover-color="#5F99FB"
						color="#333"
						sm-margin="0px 0px 0px 0px"
					>
						<Image
							lg-margin="3px 12px 0px 0px"
							width="24px"
							height="24px"
							margin="1px 12px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/document.svg?v=2021-01-28T21:23:13.010Z"
						/>
						<Text
							sm-margin="0px 0px 30px 0px"
							text-align="left"
							color="inherit"
							lg-font="normal 400 20px/30px 'AvenirNextCyrRegular', sans-serif"
							sm-font="normal 400 16px/30px 'AvenirNextCyrRegular', sans-serif"
							font="normal 400 20px/28px 'AvenirNextCyrRegular', sans-serif"
							margin="0px 0px 0px 0px"
							display="inline-block"
						>
							Сводная ведомость результатов проведения оценки условий труда в московском офисе (2017)
						</Text>
					</Link>
					<Link
						href="/documents/results_spb.pdf"
						target="_blank"
						transition="color 0.2s ease 0s"
						margin="0px 0px 12px 0px"
						lg-margin="0px 0px 16px 0px"
						sm-margin="0px 0px 0px 0px"
						display="flex"
						text-decoration-line="initial"
						hover-color="#5F99FB"
						color="#333"
					>
						<Image
							height="24px"
							margin="1px 12px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/document.svg?v=2021-01-28T21:23:13.010Z"
							lg-margin="3px 12px 0px 0px"
							width="24px"
						/>
						<Text
							text-align="left"
							color="inherit"
							lg-font="normal 400 20px/30px 'AvenirNextCyrRegular', sans-serif"
							sm-font="normal 400 16px/30px 'AvenirNextCyrRegular', sans-serif"
							font="normal 400 20px/28px 'AvenirNextCyrRegular', sans-serif"
							margin="0px 0px 0px 0px"
							display="inline-block"
							sm-margin="0px 0px 30px 0px"
						>
							Сводная ведомость результатов проведения оценки условий труда в санкт-петербургском офисе (2017)
						</Text>
					</Link>
					{"    "}
				</StackItem>
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