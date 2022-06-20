import React from "react";
import theme from "theme";
import { Theme, Text, Section, List, Box, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"resume"} />
		<Helmet>
			<title>
				Как попасть в команду - Работа в uTeam
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
		<Section padding="180px 0 120px 0" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/Advice.jpg?v=2021-01-29T22:37:50.668Z) 0% 0% /cover repeat scroll padding-box" sm-padding="150px 0 60px 0">
			<Override slot="SectionContent" align-items="center" />
			<Stack max-width="850px" margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					{"        "}
					<Text
						text-align="center"
						color="#ffffff"
						sm-font="normal 500 34px/1.2 'AvenirNextCyrDemi', sans-serif"
						font="normal 500 64px/1.2 'AvenirNextCyrDemi', sans-serif"
						margin="0px 0px 5px 0px"
						display="inline-block"
						sm-text-align="center"
						sm-margin="0px 0px 30px 0px"
					>
						Как попасть в команду?
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="40px 0 70px 0" sm-padding="30px 0 30px 0" lg-padding="50px 0 50px 0" md-padding="20px 0 20px 0">
			<Override slot="SectionContent" align-items="center" font="600 16px 'AvenirNextCyrRegular', sans-serif" />
			<Stack width="100%" margin="0px 0px 0px 0px" max-width="1020px">
				<StackItem width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Components.Tabs2 defaultTab="one" display="flex" width="100%" md-flex-direction="column">
						<Override
							slot="Tab"
							font="14px/30px 'AvenirNextCyrMedium', sans-serif"
							color="#000000"
							width="80%"
							focus-box-shadow="none"
							background="#EEF2F3"
							md-width="100%"
						/>
						<Override slot="Tab three" border-radius="0px 0px 5px 5px">
							Cобеседование
						</Override>
						<Override
							slot="TabPanels"
							margin="0px 0px 0px 0px"
							width="70%"
							md-width="100%"
							md-margin="20px 0px 0px 0px"
						/>
						<Override
							slot="Tablist"
							align-items="flex-start"
							flex-direction="column"
							padding="7px 0px 0px 0px"
							md-width="100%"
							width="30%"
						/>
						<Override slot="Tab one" border-radius="5px 5px 0px 0px" background="#EEF2F3">
							Резюме
						</Override>
						<Override slot="Tab two" background="#EEF2F3" border-radius="0px">
							Рассмотрение резюме
						</Override>
						<Override slot="Tab :active" background="#FFD83A">
							Собеседование
						</Override>
						<Components.Tab2 tabId="one" width="100%">
							<Box>
								<Text color="#263238" font="36px 'AvenirNextCyrRegular'" margin="0px 0px 16px 0px" sm-text-align="center">
									Написать хорошее резюме
								</Text>
								<Text font="18px/26px 'AvenirNextCyrRegular', sans-serif" color="#333" sm-text-align="center">
									Хорошее резюме поможет вам презентовать себя, показать свою ценность как профессионала, а нам — составить о вас первое впечатление. Позаботьтесь заранее о том, чтобы это впечатление сложилось правильное.
									<br />
								</Text>
								<Text sm-text-align="center" font="18px/26px 'AvenirNextCyrRegular', sans-serif" color="#333">
									Даже если вы хотите работать у нас фрилансером или удаленно, вы должны иметь резюме.
									<br />
								</Text>
								<Text font="24px/30px 'AvenirNextCyrMedium', sans-serif" color="#333" margin="24px 0px 4px 0px">
									Правила хорошего резюме:
								</Text>
								<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
									<Text font="normal 400 18px/30px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 8px 5px" color="#333">
										Четко сформулируйте вашу профессиию, желаемую должность, укажите уровень зарплаты
										<br />
									</Text>
								</List>
								<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
									<Text font="normal 400 18px/30px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 8px 5px" color="#333">
										В опыте работы не забудьте указать фриланс-проекты
										<br />
									</Text>
								</List>
								<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
									<Text font="normal 400 18px/30px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 8px 5px" color="#333">
										Не стесняйтесь указать факты, не относящиеся к работе: увлечения, специфические навыки
									</Text>
								</List>
								<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
									<Text font="normal 400 18px/30px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 8px 5px" color="#333">
										Пишите честно, без формализма и стандартных фраз про пунктуальность и стрессоустойчивость
									</Text>
								</List>
								<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
									<Text margin="0px 0px 8px 5px" color="#333" font="normal 400 18px/30px 'AvenirNextCyrRegular', sans-serif">
										Дополните резюме свежей фотографией
										<br />
									</Text>
								</List>
								<List padding="0px 0px 0px 20px" margin="0px 0px 0px 0px">
									<Text margin="0px 0px 8px 5px" color="#333" font="normal 400 18px/30px 'AvenirNextCyrRegular', sans-serif">
										Не забудьте про портфолио
									</Text>
								</List>
								<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
									<Text font="normal 400 18px/30px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 8px 5px" color="#333">
										Проверьте резюме на орфографические ошибки
									</Text>
								</List>
							</Box>
							<Box display="none" justify-content="center" margin="32px 0px 0px 0px" md-display="none">
								<Link
									hover-background="#4a8cfa url(https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/arrow-right-white.svg?v=2021-02-10T23:44:24.127Z) 90% center/auto no-repeat scroll padding-box"
									border-width="2px"
									border-style="solid"
									border-color="#4a8cfa"
									background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/arrow-right-blue.svg?v=2021-02-10T23:40:29.406Z) 90% center/auto no-repeat scroll padding-box"
									color="#4a8cfa"
									font="600 16px/46px AvenirNextCyrRegular, sans-serif"
									text-align="center"
									text-decoration-line="initial"
									hover-color="#ffffff"
									padding="0px 68px 1px 15px"
									border-radius="5px"
									href="/resume/#two"
									transition="all 0.2s linear 0s"
								>
									Рассмотрение резюме
								</Link>
							</Box>
						</Components.Tab2>
						<Components.Tab2 tabId="two">
							<Box>
								<Text color="#263238" font="36px 'AvenirNextCyrRegular'" margin="0px 0px 16px 0px" sm-text-align="center">
									Рассмотрение резюме
								</Text>
								<Text font="24px/30px 'AvenirNextCyrMedium', sans-serif" color="#333" sm-text-align="center">
									Мы рассматриваем все резюме
									<br />
								</Text>
								<Text sm-text-align="center" font="18px/26px 'AvenirNextCyrRegular', sans-serif" color="#333">
									Будьте уверены, мы не имеем привычки терять резюме или бросать читать их на самом интересном месте.
									<br />
								</Text>
								<Text font="24px/30px 'AvenirNextCyrMedium', sans-serif" color="#333" margin="20px 0px 16px 0px" sm-text-align="center">
									Срок рассмотрения резюме может доходить до 2 недель
								</Text>
							</Box>
							<Text color="#333" margin="0px 0px 16px 0px" sm-text-align="center" font="18px/26px 'AvenirNextCyrRegular', sans-serif">
								Пожалуйста, будьте терпеливы – при большом потоке кандидатов на рассмотрение резюме требуется немалое время. Мы обязательно свяжемся с вами и пригласим на собеседование.
							</Text>
							<Text margin="20px 0px 16px 0px" sm-text-align="center" font="24px/30px 'AvenirNextCyrMedium', sans-serif" color="#333">
								Если вам никто не ответил
							</Text>
							<Text font="18px/26px 'AvenirNextCyrRegular', sans-serif" color="#333" margin="0px 0px 16px 0px" sm-text-align="center">
								Мы стараемся давать обратную связь по всем резюме. Если же вам все таки не ответили в течение 2 недель, значит вакансия уже занята, либо ваш текущий набор навыков не полностью соответствует нашим требованиям.
							</Text>
							<Text font="24px/30px 'AvenirNextCyrMedium', sans-serif" color="#333" margin="20px 0px 16px 0px" sm-text-align="center">
								Всегда можно попробовать ещё раз
							</Text>
							<Text font="18px/26px 'AvenirNextCyrRegular', sans-serif" color="#333" margin="0px 0px 16px 0px" sm-text-align="center">
								В случае отказа вы всегда можете связаться с нами через некоторое время, когда появится новая интересная вам вакансия или вы решите, что набрали больше опыта и навыков.
							</Text>
							<Box justify-content="center" margin="32px 0px 0px 0px" md-display="none" display="none">
								<Link
									color="#4a8cfa"
									hover-color="#ffffff"
									href="/resume/#three"
									text-align="center"
									border-width="2px"
									border-color="#4a8cfa"
									padding="0px 68px 1px 15px"
									border-radius="5px"
									hover-background="#4a8cfa url(https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/arrow-right-white.svg?v=2021-02-10T23:44:24.127Z) 90% center/auto no-repeat scroll padding-box"
									text-decoration-line="initial"
									border-style="solid"
									background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/arrow-right-blue.svg?v=2021-02-10T23:40:29.406Z) 90% center/auto no-repeat scroll padding-box"
									transition="all 0.2s linear 0s"
									font="600 16px/46px AvenirNextCyrRegular, sans-serif"
								>
									Собеседование
								</Link>
							</Box>
						</Components.Tab2>
						<Components.Tab2 tabId="three">
							<Box>
								<Text color="#263238" font="36px 'AvenirNextCyrRegular'" margin="0px 0px 16px 0px" sm-text-align="center">
									Собеседование
								</Text>
								<Text color="#333" sm-text-align="center" font="18px/26px 'AvenirNextCyrRegular', sans-serif">
									Процесс собеседования может включать в себя несколько встреч, которые могут быть как личными, так и удаленными.
									<br />
								</Text>
								<Text font="24px/30px 'AvenirNextCyrMedium', sans-serif" color="#333" margin="20px 0px 16px 0px" sm-text-align="center">
									Что будет на собеседовании
								</Text>
							</Box>
							<Text sm-text-align="center" font="18px/26px 'AvenirNextCyrRegular', sans-serif" color="#333" margin="0px 0px 16px 0px">
								Разговор о вас
								<br />
							</Text>
							<Text margin="0px 0px 16px 0px" sm-text-align="center" font="18px/26px 'AvenirNextCyrRegular', sans-serif" color="#333">
								При проведении интервью мы будем интересоваться вашими амбициями, активностью жизненной позиции, отношением к себе и окружающим. И про ваши вкусы в искусстве и хобби тоже обязательно спросим.
							</Text>
							<Text font="18px/26px 'AvenirNextCyrRegular', sans-serif" color="#333" margin="0px 0px 16px 0px" sm-text-align="center">
								Тестовое задание и профессиональные вопросы
								<br />
							</Text>
							<Text sm-text-align="center" font="18px/26px 'AvenirNextCyrRegular', sans-serif" color="#333" margin="0px 0px 16px 0px">
								Будьте готовы отвечать на конкретные профессиональные вопросы: если вы программист — писать код, если дизайнер — обсуждать интерфейсные решения. Некоторые позиции в компании предполагают небольшие тестовые задания.
							</Text>
							<Text font="24px/30px 'AvenirNextCyrMedium', sans-serif" color="#333" margin="20px 0px 16px 0px" sm-text-align="center">
								Собеседование может быть удалённым
							</Text>
							<Text sm-text-align="center" font="18px/26px 'AvenirNextCyrRegular', sans-serif" color="#333" margin="0px 0px 16px 0px">
								Часто нам приходится проводить собеседования с кандидатами из других городов удаленно — в Skype. Не забывайте, удаленное собеседование не менее серьезно, чем личное: стоит помнить о пунктуальности и правилах этикета. Мы очень советуем заранее позаботиться о хорошем интернет-соединении, наличии веб-камеры и качественном звуке.
								<br />
							</Text>
						</Components.Tab2>
					</Components.Tabs2>
					<Box display="flex" margin="35px 0px 0px 0px">
						<Box width="30%" sm-display="none" md-display="none" />
						<Box
							display="flex"
							justify-content="flex-start"
							margin="0px 0px 0px 0px"
							width="70%"
							sm-width="100%"
							sm-justify-content="center"
							md-width="100%"
							md-justify-content="center"
						>
							<Components.PopUp
								left="-30px"
								bottom="auto"
								right="auto"
								top="40%"
								transition="all 0.5s ease 0s"
							>
								<Override
									slot="button"
									border-radius="5px"
									margin="0px 0px 0px 0px"
									hover-background="#e6c235"
									font="normal 500 16px/50px 'AvenirNextCyrMedium', sans-serif"
									transition="all 0.2s linear 0s"
									left="-30px"
									className="noprint"
									color="#263238"
									bottom="auto"
									right="auto"
									top="40%"
									hover-left="0px"
									letter-spacing=".1px"
									background="#ffd83a"
									padding="0px 15px 0px 15px"
								>
									Откликнуться на вакансию
								</Override>
								<Override
									slot="wrapper"
									max-width="672px"
									padding="0px 0px 0px 0px"
									border-radius="0px"
									overflow-y="scroll"
									max-height="1150px"
									background="#ffffff"
									width="100%"
									margin="0px 0px 0px 0px"
									height="100%"
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
						</Box>
					</Box>
				</StackItem>
				{"        "}
			</Stack>
		</Section>
		<Section lg-padding="40px 0 40px 0" background="#eef2f3" padding="60px 0 60px 0" sm-padding="60px 0 60px 0">
			<Override slot="SectionContent" align-items="center" />
			<Stack margin="0px 0px 0px 0px" max-width="1170px" width="100%">
				<StackItem width="100%">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					<Text
						text-align="center"
						padding="0px 20% 0px 20%"
						margin="0px 0px 30px 0px"
						lg-padding="0px 0px 0px 0px"
						sm-font="normal 400 24px/34px 'AvenirNextCyrMedium', sans-serif"
						font="normal 400 48px/54px 'AvenirNextCyrMedium', sans-serif"
						color="#4a8cfa"
					>
						7 советов, как понравиться нашему HR-менеджеру:
					</Text>
				</StackItem>
				<StackItem width="33.333%" lg-width="50%" sm-width="100%">
					<Override
						slot="StackItemContent"
						justify-content="flex-start"
						flex-direction="column"
						sm-align-items="center"
						align-items="flex-start"
					/>
					<Text color="#aec1d9" padding="0px 0px 0px 0px" margin="0px 0px 16px 0px" font="normal 400 48px/54px 'AvenirNextCyrMedium', sans-serif">
						01
					</Text>
					<Text
						color="#58646f"
						padding="0px 0px 0px 0px"
						margin="0px 0px 16px 0px"
						sm-text-align="center"
						font="normal 300 18px/26px 'AvenirNextCyrRegular', sans-serif"
					>
						Не забывайте о правилах этикета. На работу можно опоздать, на собеседование — ни в коем случае
					</Text>
				</StackItem>
				<StackItem width="33.333%" lg-width="50%" sm-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						sm-align-items="center"
						align-items="flex-start"
						justify-content="flex-start"
					/>
					<Text font="normal 400 48px/54px 'AvenirNextCyrMedium', sans-serif" color="#aec1d9" padding="0px 0px 0px 0px" margin="0px 0px 16px 0px">
						02
					</Text>
					<Text
						font="normal 300 18px/26px 'AvenirNextCyrRegular', sans-serif"
						color="#58646f"
						padding="0px 0px 0px 0px"
						margin="0px 0px 16px 0px"
						sm-text-align="center"
					>
						На время собеседования отключите телефон или поставьте его на беззвучный режим
					</Text>
				</StackItem>
				<StackItem width="33.333%" lg-width="50%" sm-width="100%">
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="column"
						sm-align-items="center"
					/>
					<Text font="normal 400 48px/54px 'AvenirNextCyrMedium', sans-serif" color="#aec1d9" padding="0px 0px 0px 0px" margin="0px 0px 16px 0px">
						03
					</Text>
					<Text
						padding="0px 0px 0px 0px"
						margin="0px 0px 16px 0px"
						sm-text-align="center"
						font="normal 300 18px/26px 'AvenirNextCyrRegular', sans-serif"
						color="#58646f"
					>
						Если вы волнуетесь, лучше сразу скажите об этом — это снимет напряжение и точно не испортит впечатление о вас
					</Text>
				</StackItem>
				<StackItem width="33.333%" lg-width="50%" sm-width="100%">
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="column"
						sm-align-items="center"
					/>
					<Text color="#aec1d9" padding="0px 0px 0px 0px" margin="0px 0px 16px 0px" font="normal 400 48px/54px 'AvenirNextCyrMedium', sans-serif">
						04
					</Text>
					<Text
						padding="0px 0px 0px 0px"
						margin="0px 0px 16px 0px"
						sm-text-align="center"
						font="normal 300 18px/26px 'AvenirNextCyrRegular', sans-serif"
						color="#58646f"
					>
						Говорите правду. Мы обычные люди и искренность нас подкупает всегда и в любых ситуациях
					</Text>
				</StackItem>
				<StackItem width="33.333%" lg-width="50%" sm-width="100%">
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="column"
						sm-align-items="center"
					/>
					<Text color="#aec1d9" padding="0px 0px 0px 0px" margin="0px 0px 16px 0px" font="normal 400 48px/54px 'AvenirNextCyrMedium', sans-serif">
						05
					</Text>
					<Text
						padding="0px 0px 0px 0px"
						margin="0px 0px 16px 0px"
						sm-text-align="center"
						font="normal 300 18px/26px 'AvenirNextCyrRegular', sans-serif"
						color="#58646f"
					>
						Пожалуйста, узнайте о нашей компании больше — это поможет вам оценить возможности нашего совместного развития
					</Text>
				</StackItem>
				<StackItem width="33.333%" lg-width="50%" sm-width="100%">
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="column"
						sm-align-items="center"
					/>
					<Text font="normal 400 48px/54px 'AvenirNextCyrMedium', sans-serif" color="#aec1d9" padding="0px 0px 0px 0px" margin="0px 0px 16px 0px">
						06
					</Text>
					<Text
						sm-text-align="center"
						font="normal 300 18px/26px 'AvenirNextCyrRegular', sans-serif"
						color="#58646f"
						padding="0px 0px 0px 0px"
						margin="0px 0px 16px 0px"
					>
						Задавайте нам вопросы.
						<br />
						Любые: о зарплате, отпуске, обеде и том, как быстро влиться в коллектив
					</Text>
				</StackItem>
				<StackItem lg-display="none" width="33.333%">
					<Override slot="StackItemContent" align-items="flex-start" justify-content="flex-start" flex-direction="column" />
				</StackItem>
				<StackItem width="33.333%" lg-width="50%" sm-width="100%">
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="column"
						sm-align-items="center"
					/>
					<Text color="#aec1d9" padding="0px 0px 0px 0px" margin="0px 0px 16px 0px" font="normal 400 48px/54px 'AvenirNextCyrMedium', sans-serif">
						07
					</Text>
					<Text
						font="normal 300 18px/26px 'AvenirNextCyrRegular', sans-serif"
						color="#58646f"
						padding="0px 0px 0px 0px"
						margin="0px 0px 16px 0px"
						sm-text-align="center"
					>
						Самое главное — приходите на собеседование в хорошем настроении!
					</Text>
				</StackItem>
				<StackItem width="33.333%" lg-display="none">
					<Override slot="StackItemContent" align-items="flex-start" justify-content="flex-start" flex-direction="column" />
				</StackItem>
				{"        "}
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