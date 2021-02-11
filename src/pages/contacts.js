import React from "react";
import theme from "theme";
import { Theme, Link, Text, Button, Box, Image, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack, Section, GoogleMap } from "@quarkly/components";
import * as Components from "components";
import { FaVk, FaFacebookF, FaTwitter, FaInstagram, FaOdnoklassniki } from "react-icons/fa";
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
						font="normal 400 36px/36px 'AvenirNextCyrRegular', sans-serif"
						margin="0px 0px 0px 0px"
						display="inline-block"
						sm-text-align="center"
						sm-margin="0px 0px 30px 0px"
						text-align="center"
						color="#263238"
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
									border-color="rgba(74, 140, 250, 0)"
									border-radius="5px"
									border-width="2px"
									border-style="solid"
									color="inherit"
									transition="all 0.2s linear 0s"
								/>
								<Button
									background="rgba(0, 119, 204, 0)"
									color="inherit"
									padding="8px 12px 8px 12px"
									font="normal 400 16px/22px 'AvenirNextCyrMedium'"
									transition="all 0.2s linear 0s"
									hover-color="#4a8cfa"
									focus-box-shadow="none"
								>
									Москва
								</Button>
							</Components.TabItem>
							<Components.TabItem tabId="two" color="#263238" border-color="#263238" transition="all 0.2s linear 0s">
								<Override
									slot="Selected Tab"
									color="#4a8cfa"
									border-width="2px"
									border-style="solid"
									border-color="#4a8cfa"
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
									background="rgba(0, 119, 204, 0)"
									color="inherit"
									padding="8px 12px 8px 12px"
									font="normal 400 16px/22px 'AvenirNextCyrMedium'"
									border-width="0px"
									transition="all 0.2s linear 0s"
									hover-color="#4a8cfa"
									focus-box-shadow="none"
								>
									Санкт-Петербург
								</Button>
							</Components.TabItem>
							<Components.TabItem tabId="three" color="#263238" border-color="#263238" transition="all 0.2s linear 0s">
								<Override
									slot="Selected Tab"
									color="#4a8cfa"
									border-width="2px"
									border-style="solid"
									border-color="#4a8cfa"
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
									background="rgba(0, 119, 204, 0)"
									color="inherit"
									padding="8px 12px 8px 12px"
									font="normal 400 16px/22px 'AvenirNextCyrMedium'"
									border-width="0px"
									transition="all 0.2s linear 0s"
									hover-color="#4a8cfa"
									focus-box-shadow="none"
								>
									Ростов-на-Дону
								</Button>
							</Components.TabItem>
						</Components.TabList>
						<Components.TabPanels>
							<Components.TabPanel tabId="one">
								<GoogleMap query="ул. Барклая 6, строение 5, БЦ" margin="15px 0px 0px 0px" z-index="0" sm-margin="15px 0px 20px 0px" />
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
											font="normal 400 18px/22px 'AvenirNextCyrMedium'"
											display="inline-block"
											sm-margin="0px 0px 30px 0px"
											color="#333"
											margin="0px 0px 0px 0px"
										>
											ул. Барклая 6, строение 5, БЦ «Барклай Плаза»
											<br />
										</Text>
									</Box>
									<Box display="flex" flex-direction="column" align-items="flex-start" max-width="300px">
										<Text
											font="normal 400 18px/22px 'AvenirNextCyrMedium'"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="center"
											color="#333"
											margin="20px 0px 17px 0px"
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
									href="/vakansii"
									background="#ffd83a"
									text-decoration-line="initial"
									color="#263238"
									font="16px/50px 'AvenirNextCyrMedium', sans-serif"
									padding="12px 15px 12px 15px"
									margin="0px 0px 0px 0px"
									transition="all 0.2s linear 0s"
									hover-background="#e6c235"
									border-radius="5px"
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
											font="normal 400 18px/22px 'AvenirNextCyrMedium'"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											color="#333"
											margin="0px 0px 0px 0px"
										>
											пр. Московский, дом 22, литер Т
										</Text>
									</Box>
									<Box display="flex" flex-direction="column" align-items="flex-start" max-width="300px">
										<Text
											font="normal 400 18px/22px 'AvenirNextCyrMedium'"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="center"
											color="#333"
											margin="20px 0px 17px 0px"
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
									href="/vakansii"
									background="#ffd83a"
									text-decoration-line="initial"
									color="#263238"
									font="16px/50px 'AvenirNextCyrMedium', sans-serif"
									padding="12px 15px 12px 15px"
									margin="0px 0px 0px 0px"
									transition="all 0.2s linear 0s"
									hover-background="#e6c235"
									border-radius="5px"
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
										display="flex"
										flex-direction="column"
										align-items="flex-start"
										max-width="270px"
										width="100%"
										sm-max-width="none"
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
											font="normal 400 18px/22px 'AvenirNextCyrMedium'"
											display="inline-block"
											sm-margin="0px 0px 30px 0px"
											color="#333"
											margin="0px 0px 0px 0px"
										>
											Ростов-на-Дону, ул. Алексея Береста, 6{"\n\n"}
										</Text>
									</Box>
									<Box display="flex" flex-direction="column" align-items="flex-start" max-width="300px">
										<Text
											font="normal 400 18px/22px 'AvenirNextCyrMedium'"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="center"
											color="#333"
											margin="20px 0px 17px 0px"
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
									href="/vakansii"
									background="#ffd83a"
									text-decoration-line="initial"
									color="#263238"
									font="16px/50px 'AvenirNextCyrMedium', sans-serif"
									padding="12px 15px 12px 15px"
									margin="0px 0px 0px 0px"
									transition="all 0.2s linear 0s"
									hover-background="#e6c235"
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
				<StackItem width="100%" display="flex">
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
						font="normal 400 20px/28px 'AvenirNextCyrRegular', sans-serif"
						margin="18px 0px 25px 0px"
						display="inline-block"
						sm-margin="0px 0px 30px 0px"
						text-align="left"
						color="#333"
						sm-font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif"
					>
						Согласно ФЗ от 28 декабря 2013 г. N 426-ФЗ «О специальной оценке условий труда» статья 15 п.6. мы публикуем результаты специальной оценки условий труда в наших офисах
						<br />
					</Text>
					<Link
						href="/documents/Exp_opinion_2018.pdf"
						display="flex"
						text-decoration-line="initial"
						target="_blank"
						transition="color 0.2s ease 0s"
						hover-color="#5F99FB"
						color="#333"
						margin="0px 0px 12px 0px"
						lg-margin="0px 0px 16px 0px"
						sm-margin="0px 0px 0px 0px"
					>
						<Image
							width="24px"
							height="24px"
							margin="1px 12px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/document.svg?v=2021-01-28T21:23:13.010Z"
							lg-margin="3px 12px 0px 0px"
						/>
						<Text
							font="normal 400 20px/28px 'AvenirNextCyrRegular', sans-serif"
							margin="0px 0px 0px 0px"
							display="inline-block"
							sm-margin="0px 0px 30px 0px"
							text-align="left"
							color="inherit"
							lg-font="normal 400 20px/30px 'AvenirNextCyrRegular', sans-serif"
							sm-font="normal 400 16px/30px 'AvenirNextCyrRegular', sans-serif"
						>
							Заключение эксперта по результатам проведения оценки условий труда в московском офисе
						</Text>
					</Link>
					<Link
						href="/documents/list_of_measures_spb_2018.pdf"
						display="flex"
						text-decoration-line="initial"
						target="_blank"
						transition="color 0.2s ease 0s"
						hover-color="#5F99FB"
						color="#333"
						margin="0px 0px 12px 0px"
						lg-margin="0px 0px 16px 0px"
						sm-margin="0px 0px 0px 0px"
					>
						<Image
							width="24px"
							height="24px"
							margin="1px 12px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/document.svg?v=2021-01-28T21:23:13.010Z"
							lg-margin="3px 12px 0px 0px"
						/>
						<Text
							font="normal 400 20px/28px 'AvenirNextCyrRegular', sans-serif"
							margin="0px 0px 0px 0px"
							display="inline-block"
							sm-margin="0px 0px 30px 0px"
							text-align="left"
							color="inherit"
							lg-font="normal 400 20px/30px 'AvenirNextCyrRegular', sans-serif"
							sm-font="normal 400 16px/30px 'AvenirNextCyrRegular', sans-serif"
						>
							Перечень мероприятий по улучшению условий труда в санкт-петербургском офисе
						</Text>
					</Link>
					<Link
						href="/documents/Summary_list_msk_2018.pdf"
						display="flex"
						text-decoration-line="initial"
						target="_blank"
						transition="color 0.2s ease 0s"
						hover-color="#5F99FB"
						color="#333"
						margin="0px 0px 12px 0px"
						lg-margin="0px 0px 16px 0px"
						sm-margin="0px 0px 0px 0px"
					>
						<Image
							width="24px"
							height="24px"
							margin="1px 12px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/document.svg?v=2021-01-28T21:23:13.010Z"
							lg-margin="3px 12px 0px 0px"
						/>
						<Text
							font="normal 400 20px/28px 'AvenirNextCyrRegular', sans-serif"
							margin="0px 0px 0px 0px"
							display="inline-block"
							sm-margin="0px 0px 30px 0px"
							text-align="left"
							color="inherit"
							lg-font="normal 400 20px/30px 'AvenirNextCyrRegular', sans-serif"
							sm-font="normal 400 16px/30px 'AvenirNextCyrRegular', sans-serif"
						>
							Сводная ведомость результатов проведения условий труда в московском офисе
						</Text>
					</Link>
					<Link
						href="http://ru.uteam.pro/resources/documents/Summary_list_spb_2018.pdf"
						display="flex"
						text-decoration-line="initial"
						target="_blank"
						transition="color 0.2s ease 0s"
						hover-color="#5F99FB"
						color="#333"
						margin="0px 0px 12px 0px"
						lg-margin="0px 0px 16px 0px"
						sm-margin="0px 0px 0px 0px"
					>
						<Image
							width="24px"
							height="24px"
							margin="1px 12px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/document.svg?v=2021-01-28T21:23:13.010Z"
							lg-margin="3px 12px 0px 0px"
						/>
						<Text
							font="normal 400 20px/28px 'AvenirNextCyrRegular', sans-serif"
							margin="0px 0px 0px 0px"
							display="inline-block"
							sm-margin="0px 0px 30px 0px"
							text-align="left"
							color="inherit"
							lg-font="normal 400 20px/30px 'AvenirNextCyrRegular', sans-serif"
							sm-font="normal 400 16px/30px 'AvenirNextCyrRegular', sans-serif"
						>
							Сводная ведомость результатов проведения условий труда в санкт-пербургском офисе
						</Text>
					</Link>
					<Link
						href="/documents/event_list_msk.pdf"
						display="flex"
						text-decoration-line="initial"
						target="_blank"
						transition="color 0.2s ease 0s"
						hover-color="#5F99FB"
						color="#333"
						margin="0px 0px 12px 0px"
						lg-margin="0px 0px 16px 0px"
						sm-margin="0px 0px 0px 0px"
					>
						<Image
							width="24px"
							height="24px"
							margin="1px 12px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/document.svg?v=2021-01-28T21:23:13.010Z"
							lg-margin="3px 12px 0px 0px"
						/>
						<Text
							font="normal 400 20px/28px 'AvenirNextCyrRegular', sans-serif"
							margin="0px 0px 0px 0px"
							display="inline-block"
							sm-margin="0px 0px 30px 0px"
							text-align="left"
							color="inherit"
							lg-font="normal 400 20px/30px 'AvenirNextCyrRegular', sans-serif"
							sm-font="normal 400 16px/30px 'AvenirNextCyrRegular', sans-serif"
						>
							Перечень мероприятий по улучшению условий труда в московском офисе (2017)
						</Text>
					</Link>
					<Link
						href="/documents/event_list_spb.pdf"
						display="flex"
						text-decoration-line="initial"
						target="_blank"
						transition="color 0.2s ease 0s"
						hover-color="#5F99FB"
						color="#333"
						margin="0px 0px 12px 0px"
						lg-margin="0px 0px 16px 0px"
						sm-margin="0px 0px 0px 0px"
					>
						<Image
							width="24px"
							height="24px"
							margin="1px 12px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/document.svg?v=2021-01-28T21:23:13.010Z"
							lg-margin="3px 12px 0px 0px"
						/>
						<Text
							font="normal 400 20px/28px 'AvenirNextCyrRegular', sans-serif"
							margin="0px 0px 0px 0px"
							display="inline-block"
							sm-margin="0px 0px 30px 0px"
							text-align="left"
							color="inherit"
							lg-font="normal 400 20px/30px 'AvenirNextCyrRegular', sans-serif"
							sm-font="normal 400 16px/30px 'AvenirNextCyrRegular', sans-serif"
						>
							Перечень мероприятий по улучшению условий труда в санкт-петербургском офисе (2017)
						</Text>
					</Link>
					<Link
						href="/documents/results_msk.pdf"
						display="flex"
						text-decoration-line="initial"
						target="_blank"
						transition="color 0.2s ease 0s"
						hover-color="#5F99FB"
						color="#333"
						margin="0px 0px 12px 0px"
						lg-margin="0px 0px 16px 0px"
						sm-margin="0px 0px 0px 0px"
					>
						<Image
							width="24px"
							height="24px"
							margin="1px 12px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/document.svg?v=2021-01-28T21:23:13.010Z"
							lg-margin="3px 12px 0px 0px"
						/>
						<Text
							font="normal 400 20px/28px 'AvenirNextCyrRegular', sans-serif"
							margin="0px 0px 0px 0px"
							display="inline-block"
							sm-margin="0px 0px 30px 0px"
							text-align="left"
							color="inherit"
							lg-font="normal 400 20px/30px 'AvenirNextCyrRegular', sans-serif"
							sm-font="normal 400 16px/30px 'AvenirNextCyrRegular', sans-serif"
						>
							Сводная ведомость результатов проведения оценки условий труда в московском офисе (2017)
						</Text>
					</Link>
					<Link
						href="/documents/results_spb.pdf"
						display="flex"
						text-decoration-line="initial"
						target="_blank"
						transition="color 0.2s ease 0s"
						hover-color="#5F99FB"
						color="#333"
						margin="0px 0px 12px 0px"
						lg-margin="0px 0px 16px 0px"
						sm-margin="0px 0px 0px 0px"
					>
						<Image
							width="24px"
							height="24px"
							margin="1px 12px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/document.svg?v=2021-01-28T21:23:13.010Z"
							lg-margin="3px 12px 0px 0px"
						/>
						<Text
							font="normal 400 20px/28px 'AvenirNextCyrRegular', sans-serif"
							margin="0px 0px 0px 0px"
							display="inline-block"
							sm-margin="0px 0px 30px 0px"
							text-align="left"
							color="inherit"
							lg-font="normal 400 20px/30px 'AvenirNextCyrRegular', sans-serif"
							sm-font="normal 400 16px/30px 'AvenirNextCyrRegular', sans-serif"
						>
							Сводная ведомость результатов проведения оценки условий труда в санкт-петербургском офисе (2017)
						</Text>
					</Link>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section
			quarkly-title="Footer"
			padding="0px 0px 0px 0px"
			border-width="2px 0px 0px 0px"
			border-style="solid"
			border-color="#dbe6f4"
			transition="all 400ms ease 0s"
			lg-padding="10px 0px 10px 0px"
		>
			<Override slot="SectionContent" max-width="1170px" width="100%" />
			<Stack margin="0px 0px 0px 0px" gap="0px">
				<StackItem width="70%" display="flex" lg-width="100%">
					<Override slot="StackItemContent" align-items="flex-end" padding="13px 30px 14px 30px" />
					{"        "}
					<Box display="flex" align-items="center" lg-flex-direction="column" lg-width="100%">
						<Link href="/">
							<Image
								src="https://screenshot.ukit.com/src/goalov/21/2021-01-27-03-36-00.png"
								color="#ffffff"
								width="121px"
								height="40px"
								margin="3px 10px 3px 3px"
								padding="0px 0px 0px 0px"
							/>
						</Link>
						<Text
							font="normal 300 14px/19px 'AvenirNextCyrMedium', sans-serif"
							margin="3px 0px 0px 22px"
							display="inline-block"
							color="#9BABBF"
							lg-margin="10px 0px 0px 0px"
							sm-margin="10px 0px 0px 0px"
						>
							<Link
								href="https://blog.ucoz.ru/"
								color="#AEC1D9"
								text-decoration-line="initial"
								hover-color="#4a8cfa"
								transition="color 0.2s ease 0s"
								font="400 14px/19px 'AvenirNextCyrMedium'"
								target="_blank"
								lg-padding="0px 0px 0px 0px"
								lg-margin="0px 0px 0px 0px"
							>
								Блог компании
							</Link>
						</Text>
						<Text
							font="normal 300 14px/19px 'AvenirNextCyrMedium', sans-serif"
							margin="3px 0px 0px 22px"
							display="inline-block"
							color="#9BABBF"
							lg-margin="10px 0px 0px 0px"
							sm-margin="10px 0px 0px 0px"
						>
							<Link
								href="http://www.ucoz.ru/all/"
								color="#AEC1D9"
								text-decoration-line="initial"
								hover-color="#4a8cfa"
								transition="color 0.2s ease 0s"
								font="400 14px/19px 'AvenirNextCyrMedium'"
								target="_blank"
								lg-padding="0px 0px 0px 0px"
								lg-margin="0px 0px 0px 0px"
							>
								Наши проекты
							</Link>
						</Text>
						<Text
							font="normal 300 14px/19px 'AvenirNextCyrMedium', sans-serif"
							margin="3px 0px 0px 22px"
							display="inline-block"
							color="#9BABBF"
							lg-margin="10px 0px 0px 0px"
							sm-margin="10px 0px 0px 0px"
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
							>
								Вакансії в Україні{" "}
							</Link>
						</Text>
						<Text
							font="normal 300 14px/19px 'AvenirNextCyrMedium', sans-serif"
							margin="3px 0px 0px 22px"
							display="inline-block"
							color="#9BABBF"
							lg-margin="10px 0px 0px 0px"
							sm-margin="10px 0px 0px 0px"
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
							>
								Careers for Foreigners
							</Link>
						</Text>
					</Box>
				</StackItem>
				<StackItem width="30%" display="flex" lg-width="100%">
					<Override
						slot="StackItemContent"
						align-items="center"
						padding="13px 30px 14px 30px"
						justify-content="flex-end"
						lg-justify-content="center"
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
				{"        "}
			</Stack>
		</Section>
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
				{"* {\nscroll-behavior: smooth;\n}\n.active .fileText {\ndisplay: none;\n}\ninput.fileText {\n    opacity: 1 !important;\n}\n* {\n  -webkit-tap-highlight-color: transparent!important;\n}\n@font-face {\n  font-family: 'AvenirNextCyrRegular';\n  src: url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Regular.eot');\n  src: url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Regular.eot?#iefix') format('embedded-opentype'), url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Regular.woff') format('woff'), url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Regular.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'AvenirNextCyrMedium';\n  src: url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Medium.eot');\n  src: url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Medium.eot?#iefix') format('embedded-opentype'), url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Medium.woff') format('woff'), url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Medium.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'AvenirNextCyrBold';\n  src: url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Bold.eot');\n  src: url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Bold.eot?#iefix') format('embedded-opentype'), url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Bold.woff') format('woff'), url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Bold.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'AvenirNextCyrDemi';\n  src: url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Demi.otf');\n  font-weight: normal;\n  font-style: normal;\n}\nbody {\n  font-family: 'AvenirNextCyrRegular', sans-serif;\n  font-weight: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}"}
			</style>
			<link
				href={"/nubexPrint.css"}
				media={"print"}
				type={"text/css"}
				rel={"stylesheet"}
				place={"endOfHead"}
				rawKey={"601c3cb7f03035695e1bad36"}
			/>
			<style place={"endOfHead"} rawKey={"601c8cac4316710fc00ca4bd"}>
				{".custom-file-input {\n  display:inline-block;\n  position:relative;\n  width:250px;\n  height:30px;\n  background-color:black;\n  color:white;\n  font:normal normal 13px/30px Helmet,FreeSans,Sans-Serif;\n  border-radius:3px;\n  overflow:hidden;\n  cursor:text;\n}\n\n.custom-file-input input {\n  /* sembunyikan dengan `opacity:0` */\n  opacity:0;\n  filter:alpha(opacity=0);\n  /* pastikan elemen ini selalu berada di sebelah atas */\n  display:block;\n  position:absolute;\n  top:0;\n  right:0;\n  margin:0;\n  padding:0;\n  font-size:2000%;\n  z-index:4;\n  cursor:pointer;\n}\n\n.custom-file-input span {\n  display:block;\n  position:absolute;\n  top:0;\n  right:0;\n  bottom:0;\n  left:0;\n  padding:0 10px;\n  overflow:hidden;\n}\n\n.custom-file-input span + span {\n  left:auto;\n  background-color:#234;\n  border-radius:0 3px 3px 0;\n  padding:0 15px;\n  box-shadow:0 0 3px black,0 0 10px black;\n}\n\n\n/* Dora the Explorer */\n\n.custom-file-input input::-ms-value {display:none}\n\n.custom-file-input input::-ms-browse {\n  display:block;\n  margin:0;\n  padding:0;\n  cursor:inherit;\n}"}
			</style>
			<script
				src={""}
				type={""}
				referrerpolicy={""}
				async={true}
				place={"endOfBody"}
				rawKey={"601edfb422a983df27535bf9"}
			>
				{"    var widgetOptions317053 = {\n        bg_color: \"transparent\"\n    };\n    (function() {\n        var a = document.createElement(\"script\"), h = \"head\";\n        a.async = true;\n        a.src = (document.location.protocol == \"https:\" ? \"https:\" : \"http:\") + \"//ucalc.pro/api/widget.js?id=317053&t=\"+Math.floor(new Date()/18e5);\n        document.getElementsByTagName(h)[0].appendChild(a)\n    })();"}
			</script>
			<script place={"endOfBody"} rawKey={"6020fdc04bbf66cbbeba94d8"}>
				{"/*0000000000000000*/\"init\"===window._uSocialTool||void 0===window._uSocialTool&&(window._uSocialTool=\"init\",usclUtility={tool:{checkIE:function(){return Boolean(document.all&&(!document.documentMode||document.documentMode&&document.documentMode<10))},hasObj:function(t,n){return void 0!==t&&null!=t&&(null==n||n in t)},closestParent:function(t,n){if(!t.classList.contains(n))for(;(t=t.parentElement)&&!t.classList.contains(n););return t},checkInObject:function(t,n){var i,e=null;for(i in t)if(t.hasOwnProperty(i)){if(i===n){e=t[i];break}if(t[i]&&\"object\"==typeof t[i]){var o=this.checkInObject(t[i],n);if(o){e=o;break}}}return e},bitShiftByKey:function(t,n){for(var i=\"\",e=0;e<t.length;e++){var o=n.substr(-1);i+=String.fromCharCode(t[e].charCodeAt(0)^o.charCodeAt(0)),n=o+n.substr(0,n.length-1)}return i},getVersion:function(t){var n=\"\";return n=void 0!==t?String(\"?v=\"+t):n},randomString:function(t){for(var n=\"0123456789\",i=\"\",e=0;e<t;e++){var o=Math.floor(Math.random()*n.length);i+=n.substring(o,o+1)}return i},isNumeric:function(t){return!isNaN(parseFloat(t))&&isFinite(t)}}});var usclHost=function(){function o(t){t=t?t.getAttribute(\"src\").split(\"/\"):null;return[].concat(t[0],t[1],t[2]).join(\"/\")}return{init:function(){var t=document.querySelector(\"script[data-script=usocial]\")||!1,n=document.querySelector(\"[data-uscl-host]\")||!1,i=t?o(t):n?(i=n)?i.getAttribute(\"data-uscl-host\"):\"\":function(){for(var t,n=document.querySelectorAll(\"script[src]\")||[],i=n.length-1;0<=i;i--){var e=n[i].getAttribute(\"src\")||\"\";/usocial\\./.test(e)&&(t=o(n[i]),n[i].dataScript=\"usocial\")}return t}();return i}}}(),checkDevice={device:{userAgent:window.navigator.userAgent.toLowerCase(),ios:function(){return this.iphone()||this.ipod()||this.ipad()},mobileSafari:function(){return/safari/.test(navigator.userAgent.toLowerCase())&&!/chrome/.test(navigator.userAgent.toLowerCase())},mobileChrome:function(){return/chrome/.test(navigator.userAgent.toLowerCase())&&!/version/.test(navigator.userAgent.toLowerCase())},iphone:function(){return this.find(\"iphone\")},ipod:function(){return this.find(\"ipod\")},ipad:function(){return this.find(\"ipad\")},android:function(){return this.find(\"android\")},androidVersion:function(){return navigator.userAgent.toLowerCase().match(/android (\\d+(?:\\.\\d+)?)/)[0].replace(\"android \",\"\")},androidPhone:function(){return this.android()&&this.find(\"mobile\")},androidTablet:function(){return this.android()&&!this.find(\"mobile\")},blackberry:function(){return this.find(\"blackberry\")||this.find(\"bb10\")||this.find(\"rim\")},blackberryPhone:function(){return this.blackberry()&&!this.find(\"tablet\")},blackberryTablet:function(){return this.blackberry()&&this.find(\"tablet\")},windows:function(){return this.find(\"windows\")},windowsPhone:function(){return this.windows()&&this.find(\"phone\")},windowsTablet:function(){return this.windows()&&this.find(\"touch\")},fxos:function(){return this.find(\"(mobile; rv:\")||this.find(\"(tablet; rv:\")},fxosPhone:function(){return this.fxos()&&this.find(\"mobile\")},fxosTablet:function(){return this.fxos()&&this.find(\"tablet\")},mobile:function(){return this.androidPhone()||this.iphone()||this.ipod()||this.windowsPhone()||this.blackberryPhone()||this.fxosPhone()},tablet:function(){return this.ipad()||this.androidTablet()||this.blackberryTablet()||this.windowsTablet()||this.fxosTablet()},portrait:function(){return window.innerHeight>window.innerWidth},landscape:function(){return window.innerHeight<window.innerWidth},find:function(t){return-1!==this.userAgent.indexOf(t)}}},scrollToTop=function(){function i(t,n){var i,e=document.documentElement;0===e.scrollTop&&(i=e.scrollTop,++e.scrollTop,e=i+1===e.scrollTop--?e:document.body),e=(i=e).scrollTop,t=t,(n=n)<0||(\"object\"==typeof e&&(e=e.offsetTop),\"object\"==typeof t&&(t=t.offsetTop),function t(n,i,e,o,r,u,c){if(o<0||1<o||r<=0)return;n.scrollTop=i-(i-e)*c(o);o+=r*u;setTimeout(function(){t(n,i,e,o,r,u,c)},u)}(i,e,t,0,1/n,20,o))}function o(t){return--t*t*t+1}return{init:function(t,n){i(t,n)}}}(),sendEventRequest={init:function(t,n,i){var e;e=t,t=n,n=new(\"onload\"in new XMLHttpRequest?XMLHttpRequest:XDomainRequest),void 0===t.url&&(t.url=document.URL),t.type=e,n.open(\"POST\",usclHost.init()+\"/logs/event-handler\",!0),n.onload=function(){},n.onerror=function(){},n.send(JSON.stringify(t))}},uSocial=function(t){var n,i,e,o=0,r=!1;function u(t,n,i){var e=document.createElement(\"script\"),o=document.getElementsByTagName(\"body\")[0],r=document.getElementsByTagName(\"head\")[0];e.async=!0,e.type=\"text/javascript\",e.charset=\"UTF-8\",e.src=usclHost.init()+t+\"?js=\"+n,(void 0===o?r:o).appendChild(e),e.onload=function(){i()}}function c(){n=0<document.querySelectorAll('[data-social][data-options][data-type=\"share\"]').length,i=0<document.getElementsByClassName(\"uSocial-Like\").length,e=setTimeout(function(){if(n||i)\"init\"===window.uSocialShareInit||void 0===window.uSocialShareInit&&n&&(window.uSocialShareInit=\"init\",u(\"/usocial/usocial.share.js\",t,function(){uSocialShare.init(r)})),\"init\"===window.uSocialLikeInit||void 0===window.uSocialLikeInit&&i&&(window.uSocialLikeInit=\"init\",u(\"/usocial/usocial.like.js\",t,function(){uSocialLike.init(r)}));else{if(1500===o)return clearTimeout(e),!1;o+=50,c()}},o)}return{init:function(){usclUtility.tool.checkIE()?document.onreadystatechange=function(){\"complete\"==document.readyState&&c()}:\"loading\"==document.readyState?document.addEventListener(\"DOMContentLoaded\",c):c()}}}(\"7.1.5\");uSocial.init();"}
			</script>
		</RawHtml>
	</Theme>;
});