import React from "react";
import theme from "theme";
import { Theme, Link, Text, Icon, Button, Hr, Box, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
import { FaBoxes, FaFileCode, FaVk, FaFacebookF, FaTwitter, FaInstagram, FaOdnoklassniki } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"vacancies"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/favicon_uteam.png?v=2021-02-01T19:35:08.128Z"} type={"image/x-icon"} />
		</Helmet>
		{" "}
		<Components.Header />
		<Section padding="150px 0 80px 0" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/vac_head.jpg?v=2021-01-28T20:18:22.116Z) 0% 0% /cover repeat scroll padding-box">
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
						sm-margin="0px 0px 30px 0px"
						text-align="center"
						color="#ffffff"
					>
						Вакансии
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="0px 0 20px 0" sm-padding="110px 0 60px 0" lg-padding="120px 0 80px 0">
			<Override slot="SectionContent" align-items="center" />
			<Stack margin="0px 0px 0px 0px" max-width="1170px" width="100%">
				<StackItem width="100%">
					<Components.Tabs2 defaultTab="all" width="100%">
						<Override slot="Tab all" border-radius="5px 0px 0px 5px">
							Все вакансии
						</Override>
						<Override slot="Tab msk" border-radius="0px">
							Москва
						</Override>
						<Override slot="Tab spb" border-radius="0px">
							Санкт-Петербург
						</Override>
						<Override
							slot="Tab"
							background="#fff"
							color="#4a8cfa"
							font="normal 400 14px/22px 'AvenirNextCyrMedium'"
							margin="0px 2px 0px 0px"
							focus-box-shadow="none"
						/>
						<Override slot="Tab :active" background="#ffe02d" color="#263238">
							Все вакансии
						</Override>
						<Override
							slot="Tablist"
							align-items="center"
							justify-content="center"
							position="relative"
							top="-90px"
						/>
						<Override slot="Tab rnd">
							Ростов на дону
						</Override>
						<Components.Tab2 tabId="all">
							<Stack margin="0px 0px 0px 0px">
								<StackItem width="100%" display="flex" lg-width="50%" sm-width="100%">
									<Override
										slot="StackItemContent"
										align-items="flex-start"
										justify-content="flex-start"
										flex-direction="column"
										lg-align-items="center"
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
										<Components.TabList>
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
												>
													<Icon
														category="fa"
														icon={FaBoxes}
														color="#inherit"
														margin="0px 8px 0px 0px"
														size="20px"
													/>
													ВСЕ ВАКАНСИИ (13)
												</Button>
											</Components.TabItem>
											<Components.TabItem tabId="two">
												<Override slot="Selected Tab" color="#3d72cc" />
												<Override slot="Tab" color="#afc1db" />
												<Button
													background="rgba(0, 119, 204, 0)"
													color="inherit"
													font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
													letter-spacing=".2"
													display="flex"
													align-items="center"
													padding="8px 24px 8px 12px"
													focus-box-shadow="none"
												>
													<Icon
														category="fa"
														icon={FaFileCode}
														size="20px"
														color="inherit"
														margin="0px 8px 0px 0px"
													/>
													РАЗРАБОТКА (6)
												</Button>
											</Components.TabItem>
										</Components.TabList>
										<Components.TabPanels width="90%">
											<Components.TabPanel tabId="one">
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														href="/vacancies/pr-menedzher"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
													>
														PR-менеджер
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333">
														Проект Quarkly | Москва{" "}
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrRegular', sans-serif" color="#333">
														Мы ищем талантливого PR-щика, серьезно увлеченного вебом. Для продвижения на рынке (в первую очередь англоязычном) проекта Quarkly, ориентированного на профессиональных пользователей (веб-дизайнеров, фронтенд-разработчиков, верстальщиков).
														<br />
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														href="/vacancies/back-end-razrabotchik-php"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
													>
														Back-end разработчик (PHP)
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333">
														Проект Divly, uSocial | Санкт-Петербург
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrRegular', sans-serif" color="#333">
														Компания uKit Group г. Санкт-Петербург приглашает в свою дружную команду back-end разработчика.
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
													>
														Специалист по SEO-оптимизации сайтов
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333">
														Проект Divly | Санкт-Петербург{"\n\n"}
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrRegular', sans-serif" color="#333">
														Компания uKit Group приглашает в свою команду специалиста по SEO-оптимизации сайтов.
														<br />
														{"\n\n"}
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														href="/vacancies/sborka-sajtov-na-konstruktore-sajtov-ukit"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
													>
														Сборка сайтов на конструкторе сайтов uKit
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333">
														Проект Divly | Санкт-Петербург{"\n\n"}
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrRegular', sans-serif" color="#333">
														Компания uKit Group г. Санкт-Петербург приглашает в свою дружную команду начинающих веб-мастеров или студентов сборки сайтов на конструкторе uKit.com
														<br />
														{"\n\n"}
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
													>
														Сборщик сайтов на конструкторах uCoz/uWeb
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333">
														Проект Divly | Санкт-Петербург{"\n\n"}
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrRegular', sans-serif" color="#333">
														Компания uKit Group г. Санкт-Петербург приглашает в свою команду сборщика сайтов на конструкторе uCoz/uWeb
														<br />
														{"\n\n"}
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
													>
														Junior node.js разработчик
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333">
														Проект uKit | Ростов-на-Дону
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrRegular', sans-serif" color="#333">
														Приглашаем на работу Junior node.js разработчика.
														<br />
														{"\n\n"}
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
													>
														Менеджер-дизайнер шаблонов
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333">
														Проект uKit | Ростов-на-Дону
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrRegular', sans-serif" color="#333">
														Компания uKit Group приглашает в свою команду менеджера-дизайнера для создания шаблонов для конструктора сайтов uKit. Эта работа для вас если вы знакомы с процессом создания шаблонов для сайтов, имеете опыт работы в студии веб-дизайна.
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
												<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
													<Link
														href="/vacancies/specialist-sluzhby-tehnicheskoj-podderzhki"
														text-decoration-line="initial"
														color="#263238"
														font="22px 'AvenirNextCyrMedium', sans-serif"
														margin="0px 0px 0px 0px"
														transition="color 0.2s linear 0s"
														hover-color="#4a8cfa"
													>
														Специалист службы технической поддержки
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333">
														Проект uCalc | Ростов-на-Дону
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrRegular', sans-serif" color="#333">
														Компания uKit Group г. Санкт-Петербург приглашает в свою команду сборщика сайтов на конструкторе uCoz/uWeb
														<br />
														{"\n\n"}
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
													>
														Senior Node.js engineer
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333">
														Проект uKit | Ростов-на-Дону
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrRegular', sans-serif" color="#333">
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
													>
														Программист Perl
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333">
														Проект uCoz | Ростов-на-Дону
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrRegular', sans-serif" color="#333">
														Вы не знакомы с Perl, но не боитесь попробовать? Это верный выбор и не смотря на то, что данный язык на сегодня не является мейнстримом, как специалист вы только выиграете: перловики на сегодня весьма востребованы именно по причине своей редкости.
														<br />
														{"\n\n"}
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
													>
														Специалист службы технической поддержки
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333">
														Проект uCoz | Удаленная работа
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrRegular', sans-serif" color="#333">
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
													>
														PR-менеджер
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333">
														Проект Quarkly | Москва{" "}
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrRegular', sans-serif" color="#333">
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
													>
														Technology Evangelist/Developer Advocate
													</Link>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333">
														Проект Quarkly | Удаленная работа
													</Text>
													<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrRegular', sans-serif" color="#333">
														Мы ищем человека для продвижения на англоязычном рынке проекта Quarkly, ориентированного на профессиональных пользователей (веб-дизайнеров, фронтенд-разработчиков, верстальщиков).
													</Text>
													<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
												</Box>
											</Components.TabPanel>
											<Components.TabPanel tabId="two">
												<Text>
													Tab 2
												</Text>
											</Components.TabPanel>
										</Components.TabPanels>
									</Components.Tabs>
									{"    "}
								</StackItem>
								{"        "}
							</Stack>
						</Components.Tab2>
						<Components.Tab2 tabId="msk">
							<Text>
								sadasdasd
							</Text>
						</Components.Tab2>
						<Components.Tab2 tabId="spb">
							<Text>
								sadasdasd
							</Text>
						</Components.Tab2>
						<Components.Tab2 tabId="rnd">
							<Text>
								sadasdasd
							</Text>
						</Components.Tab2>
					</Components.Tabs2>
				</StackItem>
				{"        "}
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
							lg-margin="10px 0px 0px 22px"
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
							lg-margin="10px 0px 0px 22px"
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
							lg-margin="10px 0px 0px 22px"
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
							lg-margin="10px 0px 0px 22px"
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
				{".active .fileText {\ndisplay: none;\n}\ninput.fileText {\n    opacity: 1 !important;\n}\n* {\n  -webkit-tap-highlight-color: transparent!important;\n}\n@font-face {\n  font-family: 'AvenirNextCyrRegular';\n  src: url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Regular.eot');\n  src: url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Regular.eot?#iefix') format('embedded-opentype'), url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Regular.woff') format('woff'), url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Regular.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'AvenirNextCyrMedium';\n  src: url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Medium.eot');\n  src: url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Medium.eot?#iefix') format('embedded-opentype'), url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Medium.woff') format('woff'), url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Medium.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'AvenirNextCyrBold';\n  src: url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Bold.eot');\n  src: url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Bold.eot?#iefix') format('embedded-opentype'), url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Bold.woff') format('woff'), url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Bold.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'AvenirNextCyrDemi';\n  src: url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Demi.otf');\n  font-weight: normal;\n  font-style: normal;\n}\nbody {\n  font-family: 'AvenirNextCyrRegular', sans-serif;\n  font-weight: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}"}
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