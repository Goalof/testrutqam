import React from "react";
import theme from "theme";
import { Theme, Link, Text, Icon, Button, Hr, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack, Section } from "@quarkly/components";
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
		{" "}
		<Components.Header />
		<Section padding="150px 0 150px 0" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/vac_head.jpg?v=2021-01-28T20:18:22.116Z) 0% 0% /cover repeat scroll padding-box" md-padding="150px 0 80px 0" sm-padding="150px 0 80px 0">
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
		<Section padding="0px 0 40px 0" min-height="100vh" lg-min-height="auto">
			<Override slot="SectionContent" align-items="center" md-margin="0px 0px 0px 0px" md-width="100%" />
			<Stack margin="0px 0px 0px 0px" max-width="1170px" width="100%">
				<StackItem width="100%">
					<Override slot="StackItemContent" md-width="100%" />
					<Components.Tabs2 defaultTab="all" width="100%">
						<Override slot="Tab all" border-radius="5px 0px 0px 5px" md-border-radius="5px 5px 0px 0px">
							Все вакансии
						</Override>
						<Override slot="Tab msk" border-radius="0px">
							Москва
						</Override>
						<Override slot="Tab spb" />
						<Override slot="Tab" />
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
							align-items="center"
							justify-content="center"
							position="relative"
							top="-130px"
							md-position="sticky"
							md-flex-direction="column"
							md-width="100%"
						/>
						<Override slot="Tab rnd">
							Ростов-на-Дону
						</Override>
						<Override slot="Tab 6021ccde9e849bcf1214b34e">
							Удаленная работа
						</Override>
						<Override slot="Tab fl" border-radius="0px 5px 5px 0px" md-border-radius="0px">
							Удаленная работа
						</Override>
						<Components.Tab2 tabId="all">
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
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													background="rgba(0, 119, 204, 0)"
													color="inherit"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													letter-spacing=".2px"
													display="flex"
													align-items="center"
													padding="8px 24px 8px 12px"
													focus-box-shadow="none"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
												>
													<Icon
														category="fa"
														icon={FaBoxes}
														color="#inherit"
														margin="0px 8px 0px 0px"
														size="20px"
													/>
													ВСЕ ВАКАНСИИ (12)
												</Button>
											</Components.TabItem>
											<Components.TabItem tabId="three-des">
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													background="rgba(0, 119, 204, 0)"
													color="inherit"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													letter-spacing=".2px"
													display="flex"
													align-items="center"
													padding="8px 24px 8px 12px"
													focus-box-shadow="none"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													text-transform="uppercase"
												>
													<Icon
														category="fa"
														icon={FaRegObjectUngroup}
														size="20px"
														color="inherit"
														margin="0px 8px 0px 0px"
													/>
													Дизайн (1)
												</Button>
											</Components.TabItem>
											<Components.TabItem tabId="two">
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													background="rgba(0, 119, 204, 0)"
													color="inherit"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													letter-spacing=".2px"
													display="flex"
													align-items="center"
													padding="8px 24px 8px 12px"
													focus-box-shadow="none"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
												>
													<Icon
														category="fa"
														icon={FaFileCode}
														size="20px"
														color="inherit"
														margin="0px 8px 0px 0px"
													/>
													РАЗРАБОТКА (5)
												</Button>
											</Components.TabItem>
											<Components.TabItem tabId="three">
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													background="rgba(0, 119, 204, 0)"
													color="inherit"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													letter-spacing=".2px"
													display="flex"
													align-items="center"
													padding="8px 24px 8px 12px"
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
													Менеджмет (1)
												</Button>
											</Components.TabItem>
											<Components.TabItem tabId="four">
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													background="rgba(0, 119, 204, 0)"
													color="inherit"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													letter-spacing=".2px"
													display="flex"
													align-items="center"
													padding="8px 24px 8px 12px"
													focus-box-shadow="none"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
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
													display="flex"
													align-items="center"
													padding="8px 24px 8px 12px"
													focus-box-shadow="none"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
												>
													<Icon
														category="bs"
														icon={BsPieChartFill}
														size="18px"
														color="inherit"
														margin="0px 8px 0px 0px"
													/>
													{" "}МАРКЕТИНГ, РЕКЛАМА, PR (4)
												</Button>
											</Components.TabItem>
										</Components.TabList>
										<Components.TabPanels width="80%" md-width="100%" lg-width="70%">
											<Components.TabPanel tabId="one" md-width="100%">
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px" md-width="100%">
													<Link
														href="/vacancies/pr-menedzher"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														PR-менеджер
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект Quarkly | Москва{" "}
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Мы ищем талантливого PR-щика, серьезно увлеченного вебом. Для продвижения на рынке (в первую очередь англоязычном) проекта Quarkly, ориентированного на профессиональных пользователей (веб-дизайнеров, фронтенд-разработчиков, верстальщиков).
														<br />
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px" md-width="100%">
													<Link
														href="/vacancies/banneromejker-illyustrator"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														Баннеромейкер (иллюстратор)
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uKit | Ростов-на-Дону
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Компания uKit Group приглашает в команду баннеромейкера (иллюстратора для создания баннеров)
														<br />
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														href="/vacancies/specialist-po-seo-optimizacii-sajtov"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														Специалист по SEO-оптимизации сайтов
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект Divly | Санкт-Петербург
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Компания uKit Group приглашает в свою команду специалиста по SEO-оптимизации сайтов.
														<br />
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														href="/vacancies/junior-nodejs-razrabotchik"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														Junior node.js разработчик
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uKit | Ростов-на-Дону
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Приглашаем на работу Junior node.js разработчика.
														<br />
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														href="/vacancies/menedzher-dizajner-shablonov"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														Менеджер-дизайнер шаблонов
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uKit | Ростов-на-Дону
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Компания uKit Group приглашает в свою команду менеджера-дизайнера для создания шаблонов для конструктора сайтов uKit. Эта работа для вас если вы знакомы с процессом создания шаблонов для сайтов, имеете опыт работы в студии веб-дизайна.
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														href="/vacancies/senior-nodejs-engineer"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														Senior Node.js engineer
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uKit | Ростов-на-Дону
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														В команду проекта uKit разыскивается разработчик, имеющий не менее первого дана по Javascript.
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														href="/vacancies/programmist-perl"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														Программист Perl
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uCoz | Ростов-на-Дону
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Вы не знакомы с Perl, но не боитесь попробовать? Это верный выбор и не смотря на то, что данный язык на сегодня не является мейнстримом, как специалист вы только выиграете: перловики на сегодня весьма востребованы именно по причине своей редкости.
														<br />
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														href="/vacancies/specialist-sluzhby-tehnicheskoj-podderzhki1"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														Специалист службы технической поддержки
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uCoz | Удаленная работа
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Требуется специалист тех.поддержки: внимательный, грамотный, заинтересованный и просто хороший человек.
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														href="/vacancies/pr-menedzher1"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														PR-менеджер
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект Quarkly | Москва{" "}
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Мы ищем талантливого PR-щика, серьезно увлеченного вебом. Для продвижения на рынке (в первую очередь англоязычном) проекта Quarkly, ориентированного на профессиональных пользователей (веб-дизайнеров, фронтенд-разработчиков, верстальщиков).
														<br />
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														href="/vacancies/technology-evangelistdeveloper-advocate"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														Technology Evangelist/Developer Advocate
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект Quarkly | Удаленная работа
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Мы ищем человека для продвижения на англоязычном рынке проекта Quarkly, ориентированного на профессиональных пользователей (веб-дизайнеров, фронтенд-разработчиков, верстальщиков).
													</Text>
												</Box>
											</Components.TabPanel>
											<Components.TabPanel tabId="three-des" md-width="100%">
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px" md-width="100%">
													<Link
														href="/vacancies/banneromejker-illyustrator"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														Баннеромейкер (иллюстратор)
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uKit | Ростов-на-Дону
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Компания uKit Group приглашает в команду баннеромейкера (иллюстратора для создания баннеров)
														<br />
													</Text>
												</Box>
											</Components.TabPanel>
											<Components.TabPanel tabId="two" md-width="100%">
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														href="/vacancies/junior-nodejs-razrabotchik"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														Junior node.js разработчик
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uKit | Ростов-на-Дону
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Приглашаем на работу Junior node.js разработчика.
														<br />
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														href="/vacancies/senior-nodejs-engineer"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														Senior Node.js engineer
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uKit | Ростов-на-Дону
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														В команду проекта uKit разыскивается разработчик, имеющий не менее первого дана по Javascript.
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														href="/vacancies/programmist-perl"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														Программист Perl
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uCoz | Ростов-на-Дону
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Вы не знакомы с Perl, но не боитесь попробовать? Это верный выбор и не смотря на то, что данный язык на сегодня не является мейнстримом, как специалист вы только выиграете: перловики на сегодня весьма востребованы именно по причине своей редкости.
														<br />
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
											</Components.TabPanel>
											<Components.TabPanel tabId="three" md-width="100%">
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														href="/vacancies/menedzher-dizajner-shablonov"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														Менеджер-дизайнер шаблонов
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uKit | Ростов-на-Дону
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Компания uKit Group приглашает в свою команду менеджера-дизайнера для создания шаблонов для конструктора сайтов uKit. Эта работа для вас если вы знакомы с процессом создания шаблонов для сайтов, имеете опыт работы в студии веб-дизайна.
													</Text>
												</Box>
											</Components.TabPanel>
											<Components.TabPanel tabId="four" md-width="100%">
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														href="/vacancies/specialist-sluzhby-tehnicheskoj-podderzhki1"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
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
											<Components.TabPanel tabId="five" md-width="100%">
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px" md-width="100%">
													<Link
														href="/vacancies/pr-menedzher"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														PR-менеджер
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект Quarkly | Москва{" "}
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Мы ищем талантливого PR-щика, серьезно увлеченного вебом. Для продвижения на рынке (в первую очередь англоязычном) проекта Quarkly, ориентированного на профессиональных пользователей (веб-дизайнеров, фронтенд-разработчиков, верстальщиков).
														<br />
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														href="/vacancies/specialist-po-seo-optimizacii-sajtov"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														Специалист по SEO-оптимизации сайтов
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект Divly | Санкт-Петербург
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Компания uKit Group приглашает в свою команду специалиста по SEO-оптимизации сайтов.
														<br />
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														href="/vacancies/pr-menedzher1"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														PR-менеджер
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект Quarkly | Москва{" "}
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Мы ищем талантливого PR-щика, серьезно увлеченного вебом. Для продвижения на рынке (в первую очередь англоязычном) проекта Quarkly, ориентированного на профессиональных пользователей (веб-дизайнеров, фронтенд-разработчиков, верстальщиков).
														<br />
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														href="/vacancies/technology-evangelistdeveloper-advocate"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														Technology Evangelist/Developer Advocate
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект Quarkly | Удаленная работа
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Мы ищем человека для продвижения на англоязычном рынке проекта Quarkly, ориентированного на профессиональных пользователей (веб-дизайнеров, фронтенд-разработчиков, верстальщиков).
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
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													background="rgba(0, 119, 204, 0)"
													color="inherit"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													letter-spacing=".2px"
													display="flex"
													align-items="center"
													padding="8px 24px 8px 12px"
													focus-box-shadow="none"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
												>
													<Icon
														category="fa"
														icon={FaBoxes}
														color="#inherit"
														margin="0px 8px 0px 0px"
														size="20px"
													/>
													ВСЕ ВАКАНСИИ (1)
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
													display="flex"
													align-items="center"
													padding="8px 24px 8px 12px"
													focus-box-shadow="none"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
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
										</Components.TabList>
										<Components.TabPanels width="80%" md-width="100%" lg-width="70%">
											<Components.TabPanel tabId="one" md-width="100%">
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px" md-width="100%">
													<Link
														href="/vacancies/pr-menedzher"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														PR-менеджер
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект Quarkly | Москва{" "}
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Мы ищем талантливого PR-щика, серьезно увлеченного вебом. Для продвижения на рынке (в первую очередь англоязычном) проекта Quarkly, ориентированного на профессиональных пользователей (веб-дизайнеров, фронтенд-разработчиков, верстальщиков).
														<br />
													</Text>
												</Box>
											</Components.TabPanel>
											<Components.TabPanel tabId="five" md-width="100%">
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px" md-width="100%">
													<Link
														href="/vacancies/pr-menedzher"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														PR-менеджер
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект Quarkly | Москва{" "}
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Мы ищем талантливого PR-щика, серьезно увлеченного вебом. Для продвижения на рынке (в первую очередь англоязычном) проекта Quarkly, ориентированного на профессиональных пользователей (веб-дизайнеров, фронтенд-разработчиков, верстальщиков).
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
						<Components.Tab2 tabId="spb">
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
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													background="rgba(0, 119, 204, 0)"
													color="inherit"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													letter-spacing=".2px"
													display="flex"
													align-items="center"
													padding="8px 24px 8px 12px"
													focus-box-shadow="none"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
												>
													<Icon
														category="fa"
														icon={FaBoxes}
														color="#inherit"
														margin="0px 8px 0px 0px"
														size="20px"
													/>
													ВСЕ ВАКАНСИИ (3)
												</Button>
											</Components.TabItem>
											<Components.TabItem tabId="two">
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													background="rgba(0, 119, 204, 0)"
													color="inherit"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													letter-spacing=".2px"
													display="flex"
													align-items="center"
													padding="8px 24px 8px 12px"
													focus-box-shadow="none"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
												>
													<Icon
														category="fa"
														icon={FaFileCode}
														size="20px"
														color="inherit"
														margin="0px 8px 0px 0px"
													/>
													РАЗРАБОТКА (3)
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
													display="flex"
													align-items="center"
													padding="8px 24px 8px 12px"
													focus-box-shadow="none"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
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
										</Components.TabList>
										<Components.TabPanels width="80%" md-width="100%">
											<Components.TabPanel tabId="one" md-width="100%">
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														href="/vacancies/specialist-po-seo-optimizacii-sajtov"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														Специалист по SEO-оптимизации сайтов
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект Divly | Санкт-Петербург
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Компания uKit Group приглашает в свою команду специалиста по SEO-оптимизации сайтов.
														<br />
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
											</Components.TabPanel>
											<Components.TabPanel tabId="two" md-width="100%">
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														href="/vacancies/back-end-razrabotchik-php"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														Back-end разработчик (PHP)
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект Divly, uSocial | Санкт-Петербург
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Компания uKit Group г. Санкт-Петербург приглашает в свою дружную команду back-end разработчика.
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														href="/vacancies/sborshik-sajtov-na-konstruktorah-ucozuweb"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														Сборщик сайтов на конструкторах uCoz/uWeb
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект Divly | Санкт-Петербург
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Компания uKit Group г. Санкт-Петербург приглашает в свою команду сборщика сайтов на конструкторе uCoz/uWeb
														<br />
													</Text>
												</Box>
											</Components.TabPanel>
											<Components.TabPanel tabId="five" md-width="100%">
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														href="/vacancies/specialist-po-seo-optimizacii-sajtov"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														Специалист по SEO-оптимизации сайтов
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
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
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													background="rgba(0, 119, 204, 0)"
													color="inherit"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													letter-spacing=".2px"
													display="flex"
													align-items="center"
													padding="8px 24px 8px 12px"
													focus-box-shadow="none"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
												>
													<Icon
														category="fa"
														icon={FaBoxes}
														color="#inherit"
														margin="0px 8px 0px 0px"
														size="20px"
													/>
													ВСЕ ВАКАНСИИ (5)
												</Button>
											</Components.TabItem>
											<Components.TabItem tabId="three-des">
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													background="rgba(0, 119, 204, 0)"
													color="inherit"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													letter-spacing=".2px"
													display="flex"
													align-items="center"
													padding="8px 24px 8px 12px"
													focus-box-shadow="none"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													text-transform="uppercase"
												>
													<Icon
														category="fa"
														icon={FaRegObjectUngroup}
														size="20px"
														color="inherit"
														margin="0px 8px 0px 0px"
													/>
													Дизайн (1)
												</Button>
											</Components.TabItem>
											<Components.TabItem tabId="two">
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													background="rgba(0, 119, 204, 0)"
													color="inherit"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													letter-spacing=".2px"
													display="flex"
													align-items="center"
													padding="8px 24px 8px 12px"
													focus-box-shadow="none"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
												>
													<Icon
														category="fa"
														icon={FaFileCode}
														size="20px"
														color="inherit"
														margin="0px 8px 0px 0px"
													/>
													РАЗРАБОТКА (3)
												</Button>
											</Components.TabItem>
											<Components.TabItem tabId="three">
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													background="rgba(0, 119, 204, 0)"
													color="inherit"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													letter-spacing=".2px"
													display="flex"
													align-items="center"
													padding="8px 24px 8px 12px"
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
													Менеджмет (1)
												</Button>
											</Components.TabItem>
											<Components.TabItem tabId="four" display="none">
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" display="none" />
												<Button
													background="rgba(0, 119, 204, 0)"
													color="inherit"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													letter-spacing=".2px"
													display="flex"
													align-items="center"
													padding="8px 24px 8px 12px"
													focus-box-shadow="none"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
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
										</Components.TabList>
										<Components.TabPanels width="80%" md-width="100%" lg-width="70%">
											<Components.TabPanel tabId="one" md-width="100%">
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px" md-width="100%">
													<Link
														href="/vacancies/banneromejker-illyustrator"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														Баннеромейкер (иллюстратор)
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uKit | Ростов-на-Дону
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Компания uKit Group приглашает в команду баннеромейкера (иллюстратора для создания баннеров)
														<br />
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														href="/vacancies/junior-nodejs-razrabotchik"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														Junior node.js разработчик
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uKit | Ростов-на-Дону
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Приглашаем на работу Junior node.js разработчика.
														<br />
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														href="/vacancies/menedzher-dizajner-shablonov"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														Менеджер-дизайнер шаблонов
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uKit | Ростов-на-Дону
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Компания uKit Group приглашает в свою команду менеджера-дизайнера для создания шаблонов для конструктора сайтов uKit. Эта работа для вас если вы знакомы с процессом создания шаблонов для сайтов, имеете опыт работы в студии веб-дизайна.
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														href="/vacancies/senior-nodejs-engineer"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														Senior Node.js engineer
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uKit | Ростов-на-Дону
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														В команду проекта uKit разыскивается разработчик, имеющий не менее первого дана по Javascript.
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														href="/vacancies/programmist-perl"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														Программист Perl
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uCoz | Ростов-на-Дону
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Вы не знакомы с Perl, но не боитесь попробовать? Это верный выбор и не смотря на то, что данный язык на сегодня не является мейнстримом, как специалист вы только выиграете: перловики на сегодня весьма востребованы именно по причине своей редкости.
														<br />
													</Text>
												</Box>
											</Components.TabPanel>
											<Components.TabPanel tabId="three-des" md-width="100%">
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px" md-width="100%">
													<Link
														href="/vacancies/banneromejker-illyustrator"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														Баннеромейкер (иллюстратор)
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uKit | Ростов-на-Дону
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Компания uKit Group приглашает в команду баннеромейкера (иллюстратора для создания баннеров)
														<br />
													</Text>
												</Box>
											</Components.TabPanel>
											<Components.TabPanel tabId="two" md-width="100%">
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														href="/vacancies/junior-nodejs-razrabotchik"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														Junior node.js разработчик
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uKit | Ростов-на-Дону
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Приглашаем на работу Junior node.js разработчика.
														<br />
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														href="/vacancies/senior-nodejs-engineer"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														Senior Node.js engineer
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uKit | Ростов-на-Дону
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														В команду проекта uKit разыскивается разработчик, имеющий не менее первого дана по Javascript.
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														href="/vacancies/programmist-perl"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														Программист Perl
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uCoz | Ростов-на-Дону
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Вы не знакомы с Perl, но не боитесь попробовать? Это верный выбор и не смотря на то, что данный язык на сегодня не является мейнстримом, как специалист вы только выиграете: перловики на сегодня весьма востребованы именно по причине своей редкости.
														<br />
													</Text>
												</Box>
											</Components.TabPanel>
											<Components.TabPanel tabId="three" md-width="100%">
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														href="/vacancies/menedzher-dizajner-shablonov"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														Менеджер-дизайнер шаблонов
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uKit | Ростов-на-Дону
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Компания uKit Group приглашает в свою команду менеджера-дизайнера для создания шаблонов для конструктора сайтов uKit. Эта работа для вас если вы знакомы с процессом создания шаблонов для сайтов, имеете опыт работы в студии веб-дизайна.
													</Text>
												</Box>
											</Components.TabPanel>
											<Components.TabPanel tabId="four" md-width="100%">
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														href="/vacancies/specialist-sluzhby-tehnicheskoj-podderzhki"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														Специалист службы технической поддержки
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uCalc | Ростов-на-Дону
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Компания uKit Group г. Санкт-Петербург приглашает в свою команду сборщика сайтов на конструкторе uCoz/uWeb
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
						<Components.Tab2 tabId="fl">
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
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													background="rgba(0, 119, 204, 0)"
													color="inherit"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													letter-spacing=".2px"
													display="flex"
													align-items="center"
													padding="8px 24px 8px 12px"
													focus-box-shadow="none"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
												>
													<Icon
														category="fa"
														icon={FaBoxes}
														color="#inherit"
														margin="0px 8px 0px 0px"
														size="20px"
													/>
													ВСЕ ВАКАНСИИ (3)
												</Button>
											</Components.TabItem>
											<Components.TabItem tabId="four">
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													background="rgba(0, 119, 204, 0)"
													color="inherit"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													letter-spacing=".2px"
													display="flex"
													align-items="center"
													padding="8px 24px 8px 12px"
													focus-box-shadow="none"
													lg-font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
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
													display="flex"
													align-items="center"
													padding="8px 24px 8px 12px"
													focus-box-shadow="none"
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
											<Components.TabPanel tabId="one" md-width="100%">
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														href="/vacancies/specialist-sluzhby-tehnicheskoj-podderzhki1"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														Специалист службы технической поддержки
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект uCoz | Удаленная работа
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Требуется специалист тех.поддержки: внимательный, грамотный, заинтересованный и просто хороший человек.
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														href="/vacancies/pr-menedzher1"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														PR-менеджер
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект Quarkly | 
Удаленная работа
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Мы ищем талантливого PR-щика, серьезно увлеченного вебом. Для продвижения на рынке (в первую очередь англоязычном) проекта Quarkly, ориентированного на профессиональных пользователей (веб-дизайнеров, фронтенд-разработчиков, верстальщиков).
														<br />
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														href="/vacancies/technology-evangelistdeveloper-advocate"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														Technology Evangelist/Developer Advocate
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект Quarkly | Удаленная работа
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Мы ищем человека для продвижения на англоязычном рынке проекта Quarkly, ориентированного на профессиональных пользователей (веб-дизайнеров, фронтенд-разработчиков, верстальщиков).
													</Text>
												</Box>
											</Components.TabPanel>
											<Components.TabPanel tabId="four" md-width="100%">
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														href="/vacancies/specialist-sluzhby-tehnicheskoj-podderzhki1"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
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
											<Components.TabPanel tabId="five" md-width="100%">
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														href="/vacancies/pr-menedzher1"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														PR-менеджер
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект Quarkly | Удаленная работа
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Мы ищем талантливого PR-щика, серьезно увлеченного вебом. Для продвижения на рынке (в первую очередь англоязычном) проекта Quarkly, ориентированного на профессиональных пользователей (веб-дизайнеров, фронтенд-разработчиков, верстальщиков).
														<br />
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														href="/vacancies/technology-evangelistdeveloper-advocate"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
														md-font="20px 'AvenirNextCyrMedium', sans-serif"
													>
														Technology Evangelist/Developer Advocate
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333" md-font="15px 'AvenirNextCyrMedium'">
														Проект Quarkly | Удаленная работа
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px/1.4 'AvenirNextCyrRegular', sans-serif" color="#333" md-font="14px 'AvenirNextCyrRegular', sans-serif">
														Мы ищем человека для продвижения на англоязычном рынке проекта Quarkly, ориентированного на профессиональных пользователей (веб-дизайнеров, фронтенд-разработчиков, верстальщиков).
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
					</Components.Tabs2>
				</StackItem>
				{"        "}
			</Stack>
		</Section>
		<Components.Footer />
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
				{"* {\n  scroll-behavior: smooth;\n  }\n  .active .fileText {\n  display: none;\n  }\n  input.fileText {\n      opacity: 1 !important;\n  }\n  * {\n    -webkit-tap-highlight-color: transparent!important;\n  }\n  @font-face {\n    font-family: 'AvenirNextCyrRegular';\n    src: url('/fonts/AvenirNextCyr-Regular.eot');\n    src: url('/fonts/AvenirNextCyr-Regular.eot?#iefix') format('embedded-opentype'), url('/fonts/AvenirNextCyr-Regular.woff') format('woff'), url('/fonts/AvenirNextCyr-Regular.ttf') format('truetype');\n    font-weight: normal;\n    font-style: normal;\n    font-display: auto;\n  }\n  @font-face {\n    font-family: 'AvenirNextCyrMedium';\n    src: url('/fonts/AvenirNextCyr-Medium.eot');\n    src: url('/fonts/AvenirNextCyr-Medium.eot?#iefix') format('embedded-opentype'), url('/fonts/AvenirNextCyr-Medium.woff') format('woff'), url('/fonts/AvenirNextCyr-Medium.ttf') format('truetype');\n    font-weight: normal;\n    font-style: normal;\n    font-display: auto;\n  }\n  @font-face {\n    font-family: 'AvenirNextCyrBold';\n    src: url('/fonts/AvenirNextCyr-Bold.eot');\n    src: url('/fonts/AvenirNextCyr-Bold.eot?#iefix') format('embedded-opentype'), url('/fonts/AvenirNextCyr-Bold.woff') format('woff'), url('/fonts/AvenirNextCyr-Bold.ttf') format('truetype');\n    font-weight: normal;\n    font-style: normal;\n    font-display: auto;\n  }\n  @font-face {\n    font-family: 'AvenirNextCyrDemi';\n    src: url('/fonts/AvenirNextCyr-Demi.otf');\n    font-weight: normal;\n    font-style: normal;\n    font-display: auto;\n  }\n  body {\n    font-family: 'AvenirNextCyrRegular', sans-serif;\n    font-weight: normal;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n:focus {\n  outline: none;\n}"}
			</style>
			<link
				href={"/nubexPrint.css"}
				media={"print"}
				type={"text/css"}
				rel={"stylesheet"}
				place={"endOfHead"}
				rawKey={"601c3cb7f03035695e1bad36"}
			/>
			<meta name={"yandex-verification"} content={"7ac9fd5fa6a12f5d"} place={"endOfHead"} rawKey={"604a10bbd967a07a086ed553"} />
		</RawHtml>
	</Theme>;
});