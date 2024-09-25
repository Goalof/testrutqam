import React from "react";
import theme from "theme";
import { Theme, Text, Section, Icon, Button, Link, Hr, Box, Strong } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
import { FaBoxes, FaRegObjectUngroup, FaFileCode } from "react-icons/fa";
import { MdTouchApp } from "react-icons/md";
import { IoIosChatboxes } from "react-icons/io";
import { BsPieChartFill } from "react-icons/bs";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"vacancies"} />
		<Helmet>
			<title>
				Вакансии - Работа в uTeam
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
		<Section md-padding="150px 0 80px 0" sm-padding="150px 0 80px 0" padding="150px 0 150px 0" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/vac_head.jpg?v=2021-01-28T20:18:22.116Z) 0% 0% /cover repeat scroll padding-box">
			<Override slot="SectionContent" align-items="center" />
			<Stack margin="0px 0px 0px 0px" max-width="850px">
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					{"        "}
					<Text
						font="normal 500 64px/1.2 'AvenirNextCyrDemi', sans-serif"
						margin="0px 0px 5px 0px"
						display="inline-block"
						sm-text-align="center"
						sm-margin="0px 0px 0px 0px"
						text-align="center"
						color="#ffffff"
						sm-font="normal 500 48px/1.2 'AvenirNextCyrDemi', sans-serif"
					>
						Вакансии
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		{" "}
		<Section padding="0px 0 40px 0" min-height="100vh" lg-min-height="auto">
			<Override slot="SectionContent" align-items="center" md-margin="0px 0px 0px 0px" md-width="100%" />
			<Stack margin="0px 0px 0px 0px" max-width="1170px" width="100%">
				<StackItem width="100%">
					<Override slot="StackItemContent" md-width="100%" />
					<Components.Tabs2 width="100%" defaultTab="all">
						<Override slot="Tab rnd">
							Ростов-на-Дону
						</Override>
						<Override slot="Tab 6021ccde9e849bcf1214b34e">
							Удаленная работа
						</Override>
						<Override slot="Tab fl" border-radius="0px 5px 5px 0px" md-border-radius="0px">
							Удаленная работа
						</Override>
						<Override
							slot="Tab spb"
							className="nobutton"
							pointer-events="none"
							opacity=".7"
							display="none"
						/>
						<Override slot="Tab all" border-radius="5px 0px 0px 5px" md-border-radius="5px 5px 0px 0px">
							Все вакансии
						</Override>
						<Override slot="Tab msk" border-radius="0px">
							Баку
						</Override>
						<Override
							slot="Tab :active"
							background="#ffe02d"
							color="#263238"
							md-border-radius="0px"
							md-background="#ffe02d"
							sm-background="#FFE02D"
							sm-width="100%"
						>
							Все вакансии
						</Override>
						<Override
							slot="Tablist"
							position="relative"
							top="-130px"
							md-position="sticky"
							md-flex-direction="column"
							md-width="100%"
							align-items="center"
							justify-content="center"
						/>
						<Override slot="Tab" />
						<Components.Tab2 tabId="all">
							<Stack margin="0px 0px 0px 0px">
								<StackItem sm-width="100%" width="100%" display="flex">
									<Override
										slot="StackItemContent"
										justify-content="flex-start"
										flex-direction="column"
										lg-align-items="center"
										md-padding="30px 0px 0px 0px"
										align-items="flex-start"
									/>
									{"        "}
									<Components.Tabs
										justify-content="space-between"
										height="auto"
										defaultTab="one"
										orientation="Vertical"
										width="100%"
										flex-direction="row-reverse"
									>
										<Components.TabList md-display="none" width="20%" lg-width="30%">
											<Components.TabItem tabId="one">
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													background="rgba(0, 119, 204, 0)"
													letter-spacing=".2px"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													align-items="center"
													padding="8px 24px 8px 12px"
													focus-box-shadow="none"
													color="inherit"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													display="flex"
												>
													<div />
													<Icon
														category="fa"
														icon={FaBoxes}
														size="20px"
														color="inherit"
														margin="0px 8px 0px 0px"
													/>
													ВСЕ ВАКАНСИИ (7)
												</Button>
											</Components.TabItem>
											<Components.TabItem tabId="three-des" display="none">
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													letter-spacing=".2px"
													display="flex"
													align-items="center"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													text-transform="uppercase"
													background="rgba(0, 119, 204, 0)"
													color="inherit"
													padding="8px 24px 8px 12px"
													focus-box-shadow="none"
												>
													<div />
													<Icon
														icon={FaRegObjectUngroup}
														size="20px"
														color="inherit"
														margin="0px 8px 0px 0px"
														category="fa"
													/>
													Дизайн (1)
												</Button>
											</Components.TabItem>
											<Components.TabItem tabId="two">
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													display="flex"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													background="rgba(0, 119, 204, 0)"
													letter-spacing=".2px"
													align-items="center"
													padding="8px 24px 8px 12px"
													focus-box-shadow="none"
													color="inherit"
												>
													<div />
													<Icon category="fa" icon={FaFileCode} size="20px" margin="0px 8px 0px 0px" />
													РАЗРАБОТКА (4)
												</Button>
											</Components.TabItem>
											<Components.TabItem tabId="three">
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													background="rgba(0, 119, 204, 0)"
													color="inherit"
													letter-spacing=".2px"
													display="flex"
													padding="8px 24px 8px 12px"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													align-items="center"
													focus-box-shadow="none"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													text-transform="uppercase"
												>
													<Icon
														category="md"
														icon={MdTouchApp}
														size="20px"
														color="inherit"
														margin="0px 8px 0px 0px"
													/>
													Менеджмент (1)
												</Button>
											</Components.TabItem>
											<Components.TabItem tabId="four">
												<Override slot="Tab" color="#afc1db" />
												<Override slot="Selected Tab" color="#3d72cc" />
												<Button
													color="inherit"
													letter-spacing=".2px"
													align-items="center"
													padding="8px 24px 8px 12px"
													focus-box-shadow="none"
													background="rgba(0, 119, 204, 0)"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													display="flex"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
												>
													<Icon
														category="io"
														icon={IoIosChatboxes}
														size="20px"
														color="inherit"
														margin="0px 8px 0px 0px"
													/>
													ПОДДЕРЖКА (2)
												</Button>
											</Components.TabItem>
											<Components.TabItem tabId="five">
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													padding="8px 24px 8px 12px"
													focus-box-shadow="none"
													color="inherit"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													display="flex"
													align-items="center"
													background="rgba(0, 119, 204, 0)"
													letter-spacing=".2px"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
												>
													<Icon
														category="bs"
														icon={BsPieChartFill}
														size="18px"
														color="inherit"
														margin="0px 8px 0px 0px"
													/>
													{" "}МАРКЕТИНГ, РЕКЛАМА, PR (2)
												</Button>
											</Components.TabItem>
										</Components.TabList>
										<Components.TabPanels width="80%" md-width="100%" lg-width="70%">
											<Components.TabPanel md-width="100%" tabId="one">
												<Box margin="0px 0px 0px 0px" md-width="100%" width="90%" padding="0px 0px 15px 0px">
													<Link
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/testirovshchik"
														text-decoration-line="initial"
													>
														Тестировщик
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uCoz | Удаленно
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Мы ищем ответственного, внимательного к деталям человека, со знанием системы uCoz которому будет интересно погрузиться в работу по тестированию нового функционала конструктора сайтов uCoz, включая смежные продукты конструктора, такие как Telegram uShop bot и даже конструктор сайтов uKit. Мы всегда рады людям, нацеленным на профессиональное развитие.
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box margin="0px 0px 0px 0px" md-width="100%" width="90%" padding="0px 0px 15px 0px">
													<Link
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/frontend-razrabotchik"
														text-decoration-line="initial"
													>
														Frontend-разработчик
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uKit Group | Баку, Ростов-на-Дону, Удаленная работа
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Мы ищем ответственного, внимательного к деталям человека, со знанием системы uCoz которому будет интересно погрузиться в работу по тестированию нового функционала конструктора сайтов uCoz, включая смежные продукты конструктора, такие как Telegram uShop bot и даже конструктор сайтов uKit. Мы всегда рады людям, нацеленным на профессиональное развитие.
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box margin="0px 0px 0px 0px" md-width="100%" width="90%" padding="0px 0px 15px 0px">
													<Link
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/menedzher-po-rabote-s-kliyentami"
														text-decoration-line="initial"
													>
														Менеджер по работе с клиентами
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект Divly | Ростов-на-Дону, Баку, Удаленная работа
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														<Strong>
															Divly
														</Strong>
														{" "}— официальный представитель uKit Group.
														<br />
														Команда более 10-ти лет решает весь спектр задач по разработке сайтов: создает сайты-визитки, интернет-магазины, предоставляет услуги по SEO-оптимизации сайтов под ключ.
														<br />
														Сейчас мы расширяем команду и ищем{" "}
														<Strong>
															менеджера по работе с клиентами
														</Strong>
														{" "}для коммуникации с клиентами веб-студии.
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/programmist-perl"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
													>
														Программист Perl
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uCoz
 | Ростов-на-Дону
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Вы не знакомы с Perl, но не боитесь попробовать? Это верный выбор и не смотря на то, что данный язык на сегодня не является мейнстримом, как специалист вы только выиграете: перловики на сегодня весьма востребованы именно по причине своей редкости.
														<br />
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/sistemnyj-administrator-linux"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
													>
														Системный администратор Linux
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uCoz | Баку, Ростов-на-Дону, Удаленная работа
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														uKit Group (uCoz, uKit, RuSender, WebAsk) – это аккредитованная IT-компания, которая специализируется на создании SaaS-сервисов и более 18-ти лет создает онлайн-продукты, у которых миллионы пользователей.
														<br />
														<br />
														Сейчас мы в поиске опытного Системного администратора на проект{" "}
														<Strong>
															uCoz.
														</Strong>
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box padding="0px 0px 15px 0px" margin="0px 0px 0px 0px" width="90%">
													<Link
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/specialist-sluzhby-tehnicheskoj-podderzhki1"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
													>
														Специалист службы технической поддержки
													</Link>
													<Text color="#333" md-font="15px 'AvenirNextCyrMedium'" margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'">
														Проект uKit Group | Удаленная работа
													</Text>
													<Text md-font="14px 'AvenirNextCyrRegular', sans-serif" margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333">
														uKit Group – это аккредитованная IT-компания, которая специализируется на создании SaaS-конструкторов, у которых миллионы пользователей.
														<br />
														<br />
														Мы ищем в команду грамотного и внимательного специалиста технической поддержки для работы на наших проектах.
													</Text>
												</Box>
											</Components.TabPanel>
											<Components.TabPanel tabId="three-des" md-width="100%">
												<Box md-width="100%" width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/veb-dizajner"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
													>
														Веб-дизайнер
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект Quarkly | Удаленная работа
													</Text>
													<Text color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif" margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif">
														Ищем веб-дизайнера в команду
														<Strong>
															{" "}
														</Strong>
														нового
														<Strong>
															{" "}
														</Strong>
														проекта Quarkly. Отличная возможность усилить свои навыки и выйти на новый уровень дизайна, будет обучение полному циклу создания сайтов и приложений, верстке, анимации и фронтенд-разработке.
														<br />
														Позиция для тех кому интересно не только создавать макеты, но и работать с сайтами и приложениями в интерфейсе как в Figma.
													</Text>
												</Box>
											</Components.TabPanel>
											<Components.TabPanel tabId="two" md-width="100%">
												<Box margin="0px 0px 0px 0px" md-width="100%" width="90%" padding="0px 0px 15px 0px">
													<Link
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/testirovshchik"
														text-decoration-line="initial"
													>
														Тестировщик
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uCoz | Удаленно
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Мы ищем ответственного, внимательного к деталям человека, со знанием системы uCoz которому будет интересно погрузиться в работу по тестированию нового функционала конструктора сайтов uCoz, включая смежные продукты конструктора, такие как Telegram uShop bot и даже конструктор сайтов uKit. Мы всегда рады людям, нацеленным на профессиональное развитие.
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box margin="0px 0px 0px 0px" md-width="100%" width="90%" padding="0px 0px 15px 0px">
													<Link
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/frontend-razrabotchik"
														text-decoration-line="initial"
													>
														Frontend-разработчик
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uKit Group | Баку, Ростов-на-Дону, Удаленная работа
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Мы ищем ответственного, внимательного к деталям человека, со знанием системы uCoz которому будет интересно погрузиться в работу по тестированию нового функционала конструктора сайтов uCoz, включая смежные продукты конструктора, такие как Telegram uShop bot и даже конструктор сайтов uKit. Мы всегда рады людям, нацеленным на профессиональное развитие.
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/sistemnyj-administrator-linux"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
													>
														Системный администратор Linux
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uCoz | Баку, Ростов-на-Дону, Удаленная работа
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														uKit Group (uCoz, uKit, RuSender, WebAsk) – это аккредитованная IT-компания, которая специализируется на создании SaaS-сервисов и более 18-ти лет создает онлайн-продукты, у которых миллионы пользователей.
														<br />
														<br />
														Сейчас мы в поиске опытного Системного администратора на проект{" "}
														<Strong>
															uCoz.
														</Strong>
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/programmist-perl"
													>
														Программист Perl
													</Link>
													<Text color="#333" md-font="15px 'AvenirNextCyrMedium'" margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'">
														Проект uCoz | Ростов-на-Дону
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Вы не знакомы с Perl, но не боитесь попробовать? Это верный выбор и не смотря на то, что данный язык на сегодня не является мейнстримом, как специалист вы только выиграете: перловики на сегодня весьма востребованы именно по причине своей редкости.
														<br />
													</Text>
												</Box>
											</Components.TabPanel>
											<Components.TabPanel tabId="three" md-width="100%">
												<Box margin="0px 0px 0px 0px" md-width="100%" width="90%" padding="0px 0px 15px 0px">
													<Link
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/menedzher-po-rabote-s-kliyentami"
														text-decoration-line="initial"
													>
														Менеджер по работе с клиентами
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект Divly | Ростов-на-Дону, Баку, Удаленная работа
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														<Strong>
															Divly
														</Strong>
														{" "}— официальный представитель uKit Group.
														<br />
														Команда более 10-ти лет решает весь спектр задач по разработке сайтов: создает сайты-визитки, интернет-магазины, предоставляет услуги по SEO-оптимизации сайтов под ключ.
														<br />
														Сейчас мы расширяем команду и ищем{" "}
														<Strong>
															менеджера по работе с клиентами
														</Strong>
														{" "}для коммуникации с клиентами веб-студии.
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
											</Components.TabPanel>
											<Components.TabPanel tabId="four" md-width="100%">
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/specialist-sluzhby-tehnicheskoj-podderzhki1"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
													>
														Специалист службы технической поддержки
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uKit Group| Удаленная работа
													</Text>
													<Text font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif" margin="12px 0px 0px 0px">
														Требуется специалист тех.поддержки: внимательный, грамотный, заинтересованный и просто хороший человек.
													</Text>
												</Box>
											</Components.TabPanel>
											<Components.TabPanel tabId="five" md-width="100%">
												<Box margin="0px 0px 0px 0px" md-width="100%" width="90%" padding="0px 0px 15px 0px">
													<Link
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/seo-specialist-rusender"
														text-decoration-line="initial"
													>
														Маркетолог (SEO-специалист)
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект RuSender | Удаленная работа
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Основная задача: SEO-продвижение продуктов компании (RuSender)
													</Text>
												</Box>
											</Components.TabPanel>
										</Components.TabPanels>
									</Components.Tabs>
									{"    "}
								</StackItem>
								{"        "}
							</Stack>
						</Components.Tab2>
						<Components.Tab2 tabId="msk">
							<Stack margin="0px 0px 0px 0px">
								<StackItem sm-width="100%" width="100%" display="flex">
									<Override
										slot="StackItemContent"
										md-padding="30px 0px 0px 0px"
										align-items="flex-start"
										justify-content="flex-start"
										flex-direction="column"
										lg-align-items="center"
									/>
									{"        "}
									<Components.Tabs
										height="auto"
										defaultTab="one"
										orientation="Vertical"
										width="100%"
										flex-direction="row-reverse"
										justify-content="space-between"
									>
										<Components.TabList lg-width="30%" md-display="none" width="20%">
											<Components.TabItem tabId="one">
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													color="inherit"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													letter-spacing=".2px"
													align-items="center"
													padding="8px 24px 8px 12px"
													focus-box-shadow="none"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													background="rgba(0, 119, 204, 0)"
													display="flex"
												>
													<Icon
														color="#inherit"
														margin="0px 8px 0px 0px"
														size="20px"
														category="fa"
														icon={FaBoxes}
													/>
													ВСЕ ВАКАНСИИ (3)
												</Button>
											</Components.TabItem>
											<Components.TabItem tabId="five">
												<Override slot="Tab" color="#afc1db" />
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Unselected Tab" />
												<Button
													color="inherit"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													align-items="center"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													background="rgba(0, 119, 204, 0)"
													letter-spacing=".2px"
													padding="8px 24px 8px 12px"
													focus-box-shadow="none"
													display="flex"
												>
													<Icon
														margin="0px 8px 0px 0px"
														category="fa"
														icon={FaFileCode}
														size="20px"
														color="inherit"
													/>
													РАЗРАБОТКА (2)
												</Button>
											</Components.TabItem>
											<Components.TabItem tabId="menedzher">
												<Override slot="Selected Tab" color="#3d72cc" display="none" />
												<Override slot="Tab" color="#afc1db" />
												<Override slot="Unselected Tab" display="none" />
												<Button
													align-items="center"
													padding="8px 24px 8px 12px"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													background="rgba(0, 119, 204, 0)"
													color="inherit"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													letter-spacing=".2px"
													display="flex"
													focus-box-shadow="none"
													text-transform="uppercase"
												>
													<Icon
														category="md"
														icon={MdTouchApp}
														size="20px"
														color="inherit"
														margin="0px 8px 0px 0px"
													/>
													Менеджмет (1)
												</Button>
											</Components.TabItem>
										</Components.TabList>
										<Components.TabPanels lg-width="70%" width="80%" md-width="100%">
											<Components.TabPanel tabId="one" md-width="100%">
												<Box margin="0px 0px 0px 0px" md-width="100%" width="90%" padding="0px 0px 15px 0px">
													<Link
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/frontend-razrabotchik"
														text-decoration-line="initial"
													>
														Frontend-разработчик
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uKit Group | Баку, Ростов-на-Дону, Удаленная работа
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Мы ищем ответственного, внимательного к деталям человека, со знанием системы uCoz которому будет интересно погрузиться в работу по тестированию нового функционала конструктора сайтов uCoz, включая смежные продукты конструктора, такие как Telegram uShop bot и даже конструктор сайтов uKit. Мы всегда рады людям, нацеленным на профессиональное развитие.
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box margin="0px 0px 0px 0px" md-width="100%" width="90%" padding="0px 0px 15px 0px">
													<Link
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/menedzher-po-rabote-s-kliyentami"
														text-decoration-line="initial"
													>
														Менеджер по работе с клиентами
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект Divly | Ростов-на-Дону, Баку, Удаленная работа
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														<Strong>
															Divly
														</Strong>
														{" "}— официальный представитель uKit Group.
														<br />
														Команда более 10-ти лет решает весь спектр задач по разработке сайтов: создает сайты-визитки, интернет-магазины, предоставляет услуги по SEO-оптимизации сайтов под ключ.
														<br />
														Сейчас мы расширяем команду и ищем{" "}
														<Strong>
															менеджера по работе с клиентами
														</Strong>
														{" "}для коммуникации с клиентами веб-студии.
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/ofis-menedzher"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
													>
														Офис менеджер
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uKit Group | Баку
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Мы ищем собранного, организованного и проактивного специалиста в нашу команду.
														<br />
														<br />
														Весь уклон деятельности связан со спецификой IT-отрасли.
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
											</Components.TabPanel>
											<Components.TabPanel md-width="100%" tabId="menedzher" />
											<Components.TabPanel tabId="five" md-width="100%">
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/sistemnyj-administrator-linux"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
													>
														Системный администратор Linux
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uCoz | Баку, Ростов-на-Дону, Удаленная работа
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														uKit Group (uCoz, uKit, RuSender, WebAsk) – это аккредитованная IT-компания, которая специализируется на создании SaaS-сервисов и более 18-ти лет создает онлайн-продукты, у которых миллионы пользователей.
														<br />
														<br />
														Сейчас мы в поиске опытного Системного администратора на проект{" "}
														<Strong>
															uCoz.
														</Strong>
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box margin="0px 0px 0px 0px" md-width="100%" width="90%" padding="0px 0px 15px 0px">
													<Link
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/testirovshchik"
														text-decoration-line="initial"
													>
														Тестировщик
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uCoz | Удаленно
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Мы ищем ответственного, внимательного к деталям человека, со знанием системы uCoz которому будет интересно погрузиться в работу по тестированию нового функционала конструктора сайтов uCoz, включая смежные продукты конструктора, такие как Telegram uShop bot и даже конструктор сайтов uKit. Мы всегда рады людям, нацеленным на профессиональное развитие.
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box margin="0px 0px 0px 0px" md-width="100%" width="90%" padding="0px 0px 15px 0px">
													<Link
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/frontend-razrabotchik"
														text-decoration-line="initial"
													>
														Frontend-разработчик
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uKit Group | Баку, Ростов-на-Дону, Удаленная работа
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Мы ищем ответственного, внимательного к деталям человека, со знанием системы uCoz которому будет интересно погрузиться в работу по тестированию нового функционала конструктора сайтов uCoz, включая смежные продукты конструктора, такие как Telegram uShop bot и даже конструктор сайтов uKit. Мы всегда рады людям, нацеленным на профессиональное развитие.
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
											</Components.TabPanel>
										</Components.TabPanels>
									</Components.Tabs>
									{"    "}
								</StackItem>
								{"        "}
							</Stack>
						</Components.Tab2>
						<Components.Tab2 tabId="spb">
							<Stack margin="0px 0px 0px 0px">
								<StackItem width="100%" display="flex" sm-width="100%">
									<Override
										slot="StackItemContent"
										flex-direction="column"
										lg-align-items="center"
										md-padding="30px 0px 0px 0px"
										align-items="flex-start"
										justify-content="flex-start"
									/>
									{"        "}
									<Components.Tabs
										height="auto"
										defaultTab="one"
										orientation="Vertical"
										width="100%"
										flex-direction="row-reverse"
										justify-content="space-between"
									>
										<Components.TabList md-display="none" width="20%" lg-width="30%">
											<Components.TabItem tabId="one">
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													background="rgba(0, 119, 204, 0)"
													align-items="center"
													padding="8px 24px 8px 12px"
													focus-box-shadow="none"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													color="inherit"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													letter-spacing=".2px"
													display="flex"
												>
													<div />
													<Icon
														category="fa"
														icon={FaBoxes}
														size="20px"
														color="inherit"
														margin="0px 8px 0px 0px"
													/>
													ВСЕ ВАКАНСИИ (1)
												</Button>
											</Components.TabItem>
											<Components.TabItem tabId="two">
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													align-items="center"
													padding="8px 24px 8px 12px"
													focus-box-shadow="none"
													letter-spacing=".2px"
													display="flex"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													background="rgba(0, 119, 204, 0)"
													color="inherit"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
												>
													<Icon
														size="20px"
														color="inherit"
														margin="0px 8px 0px 0px"
														category="io"
														icon={IoIosChatboxes}
													/>
													ПОДДЕРЖКА (1)
												</Button>
											</Components.TabItem>
											<Components.TabItem tabId="five" display="none">
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													align-items="center"
													focus-box-shadow="none"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													letter-spacing=".2px"
													display="flex"
													padding="8px 24px 8px 12px"
													background="rgba(0, 119, 204, 0)"
													color="inherit"
												>
													<Icon
														category="bs"
														icon={BsPieChartFill}
														size="18px"
														color="inherit"
														margin="0px 8px 0px 0px"
													/>
													{" "}МАРКЕТИНГ, РЕКЛАМА, PR (0)
												</Button>
											</Components.TabItem>
										</Components.TabList>
										<Components.TabPanels width="80%" md-width="100%">
											<Components.TabPanel tabId="one" md-width="100%">
												<Box md-width="100%" width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/rukovoditel-sluzhby-tehnicheskoj-podderzhki-spb"
														text-decoration-line="initial"
													>
														Руководитель службы технической поддержки
													</Link>
													<Text md-font="15px 'AvenirNextCyrMedium'" margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333">
														Проект uKit | Санкт-Петербург
													</Text>
													<Text color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif" margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif">
														Мы ищем опытного и неравнодушного повелителя тикетов, спешащего на помощь пользователям
сервиса uKit.
													</Text>
												</Box>
											</Components.TabPanel>
											<Components.TabPanel tabId="two" md-width="100%">
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px" md-width="100%">
													<Link
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/rukovoditel-sluzhby-tehnicheskoj-podderzhki-spb"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
													>
														Руководитель службы технической поддержки
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uKit | Санкт-Петербург
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Мы ищем опытного и неравнодушного повелителя тикетов, спешащего на помощь пользователям
сервиса uKit.
													</Text>
												</Box>
											</Components.TabPanel>
											<Components.TabPanel tabId="five" md-width="100%">
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/specialist-po-seo-optimizacii-sajtov"
														text-decoration-line="initial"
														color="#263238"
													>
														Специалист по SEO-оптимизации сайтов
													</Link>
													<Text font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'" margin="12px 0px 0px 0px">
														Проект Divly | Санкт-Петербург
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Компания uKit Group приглашает в свою команду специалиста по SEO-оптимизации сайтов.
														<br />
													</Text>
												</Box>
											</Components.TabPanel>
										</Components.TabPanels>
									</Components.Tabs>
									{"    "}
								</StackItem>
								{"        "}
							</Stack>
						</Components.Tab2>
						<Components.Tab2 tabId="rnd">
							<Stack margin="0px 0px 0px 0px">
								<StackItem width="100%" display="flex" sm-width="100%">
									<Override
										slot="StackItemContent"
										align-items="flex-start"
										justify-content="flex-start"
										flex-direction="column"
										lg-align-items="center"
										md-padding="30px 0px 0px 0px"
									/>
									{"        "}
									<Components.Tabs
										defaultTab="one"
										orientation="Vertical"
										width="100%"
										flex-direction="row-reverse"
										justify-content="space-between"
										height="auto"
									>
										<Components.TabList md-display="none" width="20%" lg-width="30%">
											<Components.TabItem tabId="one">
												<Override slot="Tab" color="#afc1db" />
												<Override slot="Selected Tab" color="#3d72cc" />
												<Button
													padding="8px 24px 8px 12px"
													focus-box-shadow="none"
													color="inherit"
													letter-spacing=".2px"
													display="flex"
													align-items="center"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													background="rgba(0, 119, 204, 0)"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
												>
													<div />
													<Icon
														size="20px"
														color="inherit"
														margin="0px 8px 0px 0px"
														category="fa"
														icon={FaBoxes}
													/>
													ВСЕ ВАКАНСИИ (4)
												</Button>
											</Components.TabItem>
											<Components.TabItem tabId="three">
												<Override slot="Selected Tab" color="#3d72cc" display="none" />
												<Override slot="Tab" color="#afc1db" display="none" />
												<Button
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													letter-spacing=".2px"
													padding="8px 24px 8px 12px"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													background="rgba(0, 119, 204, 0)"
													color="inherit"
													align-items="center"
													focus-box-shadow="none"
													text-transform="uppercase"
													display="flex"
												>
													<Icon
														category="md"
														icon={MdTouchApp}
														size="20px"
														color="inherit"
														margin="0px 8px 0px 0px"
													/>
													Менеджмет (1)
												</Button>
											</Components.TabItem>
											<Components.TabItem tabId="two">
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" display="none" />
												<Button
													color="inherit"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													focus-box-shadow="none"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													background="rgba(0, 119, 204, 0)"
													letter-spacing=".2px"
													display="flex"
													align-items="center"
													padding="8px 24px 8px 12px"
												>
													<div />
													<Icon
														margin="0px 8px 0px 0px"
														category="fa"
														icon={FaFileCode}
														size="20px"
														color="inherit"
													/>
													РАЗРАБОТКА (1)
												</Button>
											</Components.TabItem>
											<Components.TabItem tabId="three-des" display="none">
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													color="inherit"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													display="flex"
													align-items="center"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													background="rgba(0, 119, 204, 0)"
													letter-spacing=".2px"
													padding="8px 24px 8px 12px"
													focus-box-shadow="none"
												>
													<Icon
														category="bs"
														icon={BsPieChartFill}
														size="18px"
														color="inherit"
														margin="0px 8px 0px 0px"
													/>
													{" "}МАРКЕТИНГ, РЕКЛАМА, PR (1)
												</Button>
											</Components.TabItem>
											<Components.TabItem tabId="four">
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													padding="8px 24px 8px 12px"
													focus-box-shadow="none"
													letter-spacing=".2px"
													display="none"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													align-items="center"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													background="rgba(0, 119, 204, 0)"
													color="inherit"
												>
													<Icon
														color="inherit"
														margin="0px 8px 0px 0px"
														category="io"
														icon={IoIosChatboxes}
														size="20px"
													/>
													ПОДДЕРЖКА (1)
												</Button>
											</Components.TabItem>
										</Components.TabList>
										<Components.TabPanels md-width="100%" lg-width="70%" width="80%">
											<Components.TabPanel tabId="one" md-width="100%">
												<Box margin="0px 0px 0px 0px" md-width="100%" width="90%" padding="0px 0px 15px 0px">
													<Link
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/testirovshchik"
														text-decoration-line="initial"
													>
														Тестировщик
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uCoz | Удаленно
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Мы ищем ответственного, внимательного к деталям человека, со знанием системы uCoz которому будет интересно погрузиться в работу по тестированию нового функционала конструктора сайтов uCoz, включая смежные продукты конструктора, такие как Telegram uShop bot и даже конструктор сайтов uKit. Мы всегда рады людям, нацеленным на профессиональное развитие.
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box margin="0px 0px 0px 0px" md-width="100%" width="90%" padding="0px 0px 15px 0px">
													<Link
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/frontend-razrabotchik"
														text-decoration-line="initial"
													>
														Frontend-разработчик
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uKit Group | Баку, Ростов-на-Дону, Удаленная работа
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Мы ищем ответственного, внимательного к деталям человека, со знанием системы uCoz которому будет интересно погрузиться в работу по тестированию нового функционала конструктора сайтов uCoz, включая смежные продукты конструктора, такие как Telegram uShop bot и даже конструктор сайтов uKit. Мы всегда рады людям, нацеленным на профессиональное развитие.
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box margin="0px 0px 0px 0px" md-width="100%" width="90%" padding="0px 0px 15px 0px">
													<Link
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/menedzher-po-rabote-s-kliyentami"
														text-decoration-line="initial"
													>
														Менеджер по работе с клиентами
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект Divly | Ростов-на-Дону, Баку, Удаленная работа
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														<Strong>
															Divly
														</Strong>
														{" "}— официальный представитель uKit Group.
														<br />
														Команда более 10-ти лет решает весь спектр задач по разработке сайтов: создает сайты-визитки, интернет-магазины, предоставляет услуги по SEO-оптимизации сайтов под ключ.
														<br />
														Сейчас мы расширяем команду и ищем{" "}
														<Strong>
															менеджера по работе с клиентами
														</Strong>
														{" "}для коммуникации с клиентами веб-студии.
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
											</Components.TabPanel>
											<Components.TabPanel md-width="100%" tabId="three-des">
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px" md-width="100%">
													<Link
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/deloproizvoditel-pomoshnik-yurista"
													>
														Делопроизводитель (помощник юриста)
													</Link>
													<Text font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'" margin="12px 0px 0px 0px">
														Проект uKit | Ростов-на-Дону
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														IT-компания uKit Group открывает вакансию помощника юриста/делопроизводителя. Мы 15 лет помогаем людям реализовать себя онлайн. Ищем начинающего специалиста, который хотел бы получить опыт в сфере кадрового делопроизводства и юриспруденции.
													</Text>
												</Box>
											</Components.TabPanel>
											<Components.TabPanel md-width="100%" tabId="two">
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/programmist-perl"
														text-decoration-line="initial"
													>
														Программист Perl
													</Link>
													<Text font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'" margin="12px 0px 0px 0px">
														Проект uCoz | Ростов-на-Дону
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Вы не знакомы с Perl, но не боитесь попробовать? Это верный выбор и не смотря на то, что данный язык на сегодня не является мейнстримом, как специалист вы только выиграете: перловики на сегодня весьма востребованы именно по причине своей редкости.
														<br />
													</Text>
												</Box>
											</Components.TabPanel>
											<Components.TabPanel tabId="three" md-width="100%">
												<Box margin="0px 0px 0px 0px" md-width="100%" width="90%" padding="0px 0px 15px 0px">
													<Link
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/rukovoditel-sluzhby-tehnicheskoj-podderzhki-spb"
														text-decoration-line="initial"
													>
														Руководитель службы технической поддержки
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект 
uKit Group

 | В офис или на удаленную работу
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														uKit Group – это аккредитованная IT-компания, которая специализируется на создании SaaS-конструкторов и вот уже более 17-ти лет создает онлайн-продукты, у которых миллионы пользователей.
														<br />
														<br />
														Наиболее известны такие наши проекты, как: uCoz, uKit, WebAsk, RuSender etc.
														<br />
														<br />
														Мы ищем опытного и неравнодушного специалиста на должность Руководителя службы технической поддержки, который умеет управлять людьми и тикетами. Поддержка пользователей осуществляется в письменном формате.
													</Text>
												</Box>
											</Components.TabPanel>
											<Components.TabPanel tabId="four" md-width="100%">
												<Box md-width="100%" width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/rukovoditel-sluzhby-tehnicheskoj-podderzhki"
													>
														Руководитель службы технической поддержки
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uKit | Ростов-на-Дону
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Мы ищем опытного и неравнодушного повелителя тикетов, спешащего на помощь пользователям
сервиса uKit.
													</Text>
												</Box>
											</Components.TabPanel>
										</Components.TabPanels>
									</Components.Tabs>
									{"    "}
								</StackItem>
								{"        "}
							</Stack>
						</Components.Tab2>
						<Components.Tab2 tabId="fl">
							<Stack margin="0px 0px 0px 0px">
								<StackItem sm-width="100%" width="100%" display="flex">
									<Override
										slot="StackItemContent"
										justify-content="flex-start"
										flex-direction="column"
										lg-align-items="center"
										md-padding="30px 0px 0px 0px"
										align-items="flex-start"
									/>
									{"        "}
									<Components.Tabs
										flex-direction="row-reverse"
										justify-content="space-between"
										height="auto"
										defaultTab="one"
										orientation="Vertical"
										width="100%"
									>
										<Components.TabList lg-width="30%" md-display="none" width="20%">
											<Components.TabItem tabId="one">
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													padding="8px 24px 8px 12px"
													background="rgba(0, 119, 204, 0)"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													letter-spacing=".2px"
													focus-box-shadow="none"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													color="inherit"
													display="flex"
													align-items="center"
												>
													<div />
													<Icon
														size="20px"
														color="inherit"
														margin="0px 8px 0px 0px"
														category="fa"
														icon={FaBoxes}
													/>
													ВСЕ ВАКАНСИИ (5)
												</Button>
											</Components.TabItem>
											<Components.TabItem tabId="two">
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Override slot="Unselected Tab" />
												<Button
													color="inherit"
													letter-spacing=".2px"
													focus-box-shadow="none"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													background="rgba(0, 119, 204, 0)"
													display="flex"
													align-items="center"
													padding="8px 24px 8px 12px"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
												>
													<Icon
														category="fa"
														icon={FaFileCode}
														size="20px"
														color="inherit"
														margin="0px 8px 0px 0px"
													/>
													РАЗРАБОТКА (4)
												</Button>
											</Components.TabItem>
											<Components.TabItem tabId="three" display="none">
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													color="inherit"
													align-items="center"
													text-transform="uppercase"
													background="rgba(0, 119, 204, 0)"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													letter-spacing=".2px"
													padding="8px 24px 8px 12px"
													focus-box-shadow="none"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													display="flex"
												>
													<Icon
														color="inherit"
														margin="0px 8px 0px 0px"
														category="md"
														icon={MdTouchApp}
														size="20px"
													/>
													Менеджмет (1)
												</Button>
											</Components.TabItem>
											<Components.TabItem tabId="four">
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													display="flex"
													align-items="center"
													background="rgba(0, 119, 204, 0)"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													letter-spacing=".2px"
													padding="8px 24px 8px 12px"
													focus-box-shadow="none"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													color="inherit"
												>
													<Icon
														category="io"
														icon={IoIosChatboxes}
														size="20px"
														color="inherit"
														margin="0px 8px 0px 0px"
													/>
													ПОДДЕРЖКА (1)
												</Button>
											</Components.TabItem>
											<Components.TabItem tabId="five">
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													background="rgba(0, 119, 204, 0)"
													color="inherit"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													letter-spacing=".2px"
													padding="8px 24px 8px 12px"
													display="none"
													align-items="center"
													focus-box-shadow="none"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
												>
													<Icon
														size="18px"
														color="inherit"
														margin="0px 8px 0px 0px"
														category="bs"
														icon={BsPieChartFill}
													/>
													{" "}МАРКЕТИНГ, РЕКЛАМА, PR (1)
												</Button>
											</Components.TabItem>
										</Components.TabList>
										<Components.TabPanels width="80%" md-width="100%" lg-width="70%">
											<Components.TabPanel tabId="one" md-width="100%">
												<Box margin="0px 0px 0px 0px" md-width="100%" width="90%" padding="0px 0px 15px 0px">
													<Link
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/testirovshchik"
														text-decoration-line="initial"
													>
														Тестировщик
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uCoz | Удаленно
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Мы ищем ответственного, внимательного к деталям человека, со знанием системы uCoz которому будет интересно погрузиться в работу по тестированию нового функционала конструктора сайтов uCoz, включая смежные продукты конструктора, такие как Telegram uShop bot и даже конструктор сайтов uKit. Мы всегда рады людям, нацеленным на профессиональное развитие.
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box margin="0px 0px 0px 0px" md-width="100%" width="90%" padding="0px 0px 15px 0px">
													<Link
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/frontend-razrabotchik"
														text-decoration-line="initial"
													>
														Frontend-разработчик
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uKit Group | Баку, Ростов-на-Дону, Удаленная работа
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Мы ищем ответственного, внимательного к деталям человека, со знанием системы uCoz которому будет интересно погрузиться в работу по тестированию нового функционала конструктора сайтов uCoz, включая смежные продукты конструктора, такие как Telegram uShop bot и даже конструктор сайтов uKit. Мы всегда рады людям, нацеленным на профессиональное развитие.
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box margin="0px 0px 0px 0px" md-width="100%" width="90%" padding="0px 0px 15px 0px">
													<Link
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/menedzher-po-rabote-s-kliyentami"
														text-decoration-line="initial"
													>
														Менеджер по работе с клиентами
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект Divly | Ростов-на-Дону, Баку, Удаленная работа
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														<Strong>
															Divly
														</Strong>
														{" "}— официальный представитель uKit Group.
														<br />
														Команда более 10-ти лет решает весь спектр задач по разработке сайтов: создает сайты-визитки, интернет-магазины, предоставляет услуги по SEO-оптимизации сайтов под ключ.
														<br />
														Сейчас мы расширяем команду и ищем{" "}
														<Strong>
															менеджера по работе с клиентами
														</Strong>
														{" "}для коммуникации с клиентами веб-студии.
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/sistemnyj-administrator-linux"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
													>
														Системный администратор Linux
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uCoz | Баку, Ростов-на-Дону, Удаленная работа
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														uKit Group (uCoz, uKit, RuSender, WebAsk) – это аккредитованная IT-компания, которая специализируется на создании SaaS-сервисов и более 18-ти лет создает онлайн-продукты, у которых миллионы пользователей.
														<br />
														<br />
														Сейчас мы в поиске опытного Системного администратора на проект{" "}
														<Strong>
															uCoz.
														</Strong>
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box margin="30px 0px 0px 0px" md-width="100%" width="90%" padding="0px 0px 15px 0px">
													<Link
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/seo-specialist-rusender"
														text-decoration-line="initial"
													>
														Маркетолог (SEO-специалист)
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект RuSender | Удаленная работа
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Основная задача: SEO-продвижение продуктов компании (RuSender)
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box margin="0px 0px 0px 0px" width="90%" padding="0px 0px 15px 0px">
													<Link
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/specialist-sluzhby-tehnicheskoj-podderzhki1"
														text-decoration-line="initial"
													>
														Специалист службы технической поддержки
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uKit Group | Удаленная работа
													</Text>
													<Text md-font="14px 'AvenirNextCyrRegular', sans-serif" margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333">
														uKit Group – это аккредитованная IT-компания, которая специализируется на создании SaaS-конструкторов, у которых миллионы пользователей.
														<br />
														<br />
														Мы ищем в команду грамотного и внимательного специалиста технической поддержки для работы на наших проектах.
													</Text>
												</Box>
											</Components.TabPanel>
											<Components.TabPanel tabId="two" md-width="100%">
												<Box margin="0px 0px 0px 0px" md-width="100%" width="90%" padding="0px 0px 15px 0px">
													<Link
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/testirovshchik"
														text-decoration-line="initial"
													>
														Тестировщик
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uCoz | Удаленно
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Мы ищем ответственного, внимательного к деталям человека, со знанием системы uCoz которому будет интересно погрузиться в работу по тестированию нового функционала конструктора сайтов uCoz, включая смежные продукты конструктора, такие как Telegram uShop bot и даже конструктор сайтов uKit. Мы всегда рады людям, нацеленным на профессиональное развитие.
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box margin="0px 0px 0px 0px" md-width="100%" width="90%" padding="0px 0px 15px 0px">
													<Link
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/frontend-razrabotchik"
														text-decoration-line="initial"
													>
														Frontend-разработчик
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uKit Group | Баку, Ростов-на-Дону, Удаленная работа
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Мы ищем ответственного, внимательного к деталям человека, со знанием системы uCoz которому будет интересно погрузиться в работу по тестированию нового функционала конструктора сайтов uCoz, включая смежные продукты конструктора, такие как Telegram uShop bot и даже конструктор сайтов uKit. Мы всегда рады людям, нацеленным на профессиональное развитие.
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/fullstack-react-laravel"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
													>
														Fullstack разработчик (React/Laravel)
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект WebAsk | Ростов-на-Дону, Баку, Удаленная работа
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														uKit Group в поиске{" "}
														<Strong>
															fullstack разработчика{" "}
														</Strong>
														для участия в работе над интересным и сложным проектом WebAsk (https://webask.io).
														<br />
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
											</Components.TabPanel>
											<Components.TabPanel tabId="three" md-width="100%">
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px" md-width="100%">
													<Link
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/komyuniti-menedzher"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
													>
														Комьюнити-менеджер
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект Quarkly | Удаленная работа
													</Text>
													<Text color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif" margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif">
														Мы ищем неравнодушного комьюнити-менеджера для организации взаимодействия с пользователями{" "}
														<Link color="--primary" href="https://quarkly.io/preview#/vacancies/https://quarkly.io/" text-decoration-line="initial">
															quarkly.io
														</Link>
														{" "}— инструмента для быстрого создания сайтов и веб-приложений на React
													</Text>
												</Box>
											</Components.TabPanel>
											<Components.TabPanel tabId="four" md-width="100%">
												<Box margin="0px 0px 0px 0px" md-width="100%" width="90%" padding="0px 0px 15px 0px">
													<Link
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/rukovoditel-sluzhby-tehnicheskoj-podderzhki-spb"
														text-decoration-line="initial"
													>
														Руководитель службы технической поддержки
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uKit Group | Ростов-на-Дону, Баку, Удаленная работа
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Мы ищем опытного и неравнодушного специалиста на должность Руководителя службы технической поддержки, который умеет управлять людьми и тикетами. Поддержка пользователей сервисов осуществляется в письменном формате.
														<br />
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
														href="/vacancies/specialist-sluzhby-tehnicheskoj-podderzhki1"
														text-decoration-line="initial"
														color="#263238"
													>
														Специалист службы технической поддержки
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uCoz | Удаленная работа
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Требуется специалист тех.поддержки: внимательный, грамотный, заинтересованный и просто хороший человек.
													</Text>
												</Box>
											</Components.TabPanel>
											<Components.TabPanel tabId="five" md-width="100%" />
										</Components.TabPanels>
									</Components.Tabs>
									{"    "}
								</StackItem>
								{"        "}
							</Stack>
						</Components.Tab2>
					</Components.Tabs2>
				</StackItem>
				{"        "}
			</Stack>
		</Section>
		<Components.Footer />
		<Box />
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