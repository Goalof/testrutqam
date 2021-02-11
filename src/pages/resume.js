import React from "react";
import theme from "theme";
import { Theme, Link, Text, List, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"resume"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/favicon_uteam.png?v=2021-02-01T19:35:08.128Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/favicon_uteam.png?v=2021-02-01T19:35:08.128Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/favicon_uteam.png?v=2021-02-01T19:35:08.128Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/favicon_uteam.png?v=2021-02-01T19:35:08.128Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/favicon_uteam.png?v=2021-02-01T19:35:08.128Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/favicon_uteam.png?v=2021-02-01T19:35:08.128Z"} />
			<meta name={"msapplication-TileColor"} content={"#5291FA"} />
		</Helmet>
		<Components.Header />
		<Section padding="150px 0 80px 0" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/Advice.jpg?v=2021-01-29T22:37:50.668Z) 0% 0% /cover repeat scroll padding-box" sm-padding="150px 0 60px 0">
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
						sm-font="normal 500 34px/1.2 'AvenirNextCyrDemi', sans-serif"
					>
						Как попасть в команду?
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="40px 0 50px 0" sm-padding="110px 0 60px 0" lg-padding="120px 0 80px 0" md-padding="60px 0 60px 0">
			<Override slot="SectionContent" align-items="center" font="600 16px 'AvenirNextCyrRegular', sans-serif" />
			<Stack margin="0px 0px 0px 0px" max-width="1020px" width="100%">
				<StackItem width="100%">
					<Components.Tabs2 defaultTab="one" display="flex" width="100%">
						<Override slot="TabPanels" margin="0px 0px 0px 0px" width="70%" />
						<Override
							slot="Tablist"
							width="30%"
							align-items="flex-start"
							flex-direction="column"
							padding="7px 0px 0px 0px"
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
						<Override
							slot="Tab"
							font="14px/30px 'AvenirNextCyrMedium', sans-serif"
							color="#000000"
							width="80%"
							focus-box-shadow="none"
							background="#EEF2F3"
						/>
						<Override slot="Tab three" border-radius="0px 0px 5px 5px">
							Cобеседование
						</Override>
						<Components.Tab2 tabId="one" width="100%">
							<Box>
								<Text color="#263238" font="36px 'AvenirNextCyrRegular'" margin="0px 0px 16px 0px">
									Написать хорошее резюме
								</Text>
								<Text font="18px/26px 'AvenirNextCyrRegular', sans-serif" color="#333">
									Хорошее резюме поможет вам презентовать себя, показать свою ценность как профессионала, а нам — составить о вас первое впечатление. Позаботьтесь заранее о том, чтобы это впечатление сложилось правильное.
									<br />
								</Text>
								<Text font="18px/26px 'AvenirNextCyrRegular', sans-serif" color="#333">
									Даже если вы хотите работать у нас фрилансером или удаленно, вы должны иметь резюме.
									<br />
								</Text>
								<Text font="24px/30px 'AvenirNextCyrMedium', sans-serif" color="#333" margin="24px 0px 4px 0px">
									Правила хорошего резюме:
								</Text>
								<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
									<Text font="normal 400 18px/30px 'AvenirNextCyrMedium', sans-serif" margin="0px 0px 8px 5px" color="#333">
										Четко сформулируйте вашу профессиию, желаемую должность, укажите уровень зарплаты
										<br />
									</Text>
								</List>
								<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
									<Text font="normal 400 18px/30px 'AvenirNextCyrMedium', sans-serif" margin="0px 0px 8px 5px" color="#333">
										В опыте работы не забудьте указать фриланс-проекты
										<br />
									</Text>
								</List>
								<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
									<Text font="normal 400 18px/30px 'AvenirNextCyrMedium', sans-serif" margin="0px 0px 8px 5px" color="#333">
										Не стесняйтесь указать факты, не относящиеся к работе: увлечения, специфические навыки
									</Text>
								</List>
								<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
									<Text font="normal 400 18px/30px 'AvenirNextCyrMedium', sans-serif" margin="0px 0px 8px 5px" color="#333">
										Пишите честно, без формализма и стандартных фраз про пунктуальность и стрессоустойчивость
									</Text>
								</List>
								<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
									<Text font="normal 400 18px/30px 'AvenirNextCyrMedium', sans-serif" margin="0px 0px 8px 5px" color="#333">
										Дополните резюме свежей фотографией
										<br />
									</Text>
								</List>
								<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
									<Text font="normal 400 18px/30px 'AvenirNextCyrMedium', sans-serif" margin="0px 0px 8px 5px" color="#333">
										Не забудьте про портфолио
									</Text>
								</List>
								<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
									<Text font="normal 400 18px/30px 'AvenirNextCyrMedium', sans-serif" margin="0px 0px 8px 5px" color="#333">
										Проверьте резюме на орфографические ошибки
									</Text>
								</List>
							</Box>
							<Box display="flex" justify-content="center" margin="32px 0px 0px 0px">
								<Link
									href="/resume/#two"
									text-align="center"
									text-decoration-line="initial"
									border-width="2px"
									border-style="solid"
									border-color="#4a8cfa"
									background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/arrow-right-blue.svg?v=2021-02-10T23:40:29.406Z) 90% center/auto no-repeat scroll padding-box"
									padding="0px 68px 1px 15px"
									color="#4a8cfa"
									transition="all 0.2s linear 0s"
									font="600 16px/46px AvenirNextCyrRegular, sans-serif"
									border-radius="5px"
									hover-color="#ffffff"
									hover-background="#4a8cfa url(https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/arrow-right-white.svg?v=2021-02-10T23:44:24.127Z) 90% center/auto no-repeat scroll padding-box"
								>
									Рассмотрение резюме
								</Link>
							</Box>
						</Components.Tab2>
						<Components.Tab2 tabId="two">
							<Box>
								<Text color="#263238" font="36px 'AvenirNextCyrRegular'" margin="0px 0px 16px 0px">
									Рассмотрение резюме
								</Text>
								<Text font="24px/30px 'AvenirNextCyrMedium', sans-serif" color="#333">
									Мы рассматриваем все резюме
									<br />
								</Text>
								<Text font="18px/26px 'AvenirNextCyrRegular', sans-serif" color="#333">
									Будьте уверены, мы не имеем привычки терять резюме или бросать читать их на самом интересном месте.
									<br />
								</Text>
								<Text font="24px/30px 'AvenirNextCyrMedium', sans-serif" color="#333" margin="20px 0px 16px 0px">
									Срок рассмотрения резюме может доходить до 2 недель
								</Text>
							</Box>
							<Text font="18px/26px 'AvenirNextCyrRegular', sans-serif" color="#333" margin="0px 0px 16px 0px">
								Пожалуйста, будьте терпеливы – при большом потоке кандидатов на рассмотрение резюме требуется немалое время. Мы обязательно свяжемся с вами и пригласим на собеседование.
							</Text>
							<Text font="24px/30px 'AvenirNextCyrMedium', sans-serif" color="#333" margin="20px 0px 16px 0px">
								Если вам никто не ответил
							</Text>
							<Text font="18px/26px 'AvenirNextCyrRegular', sans-serif" color="#333" margin="0px 0px 16px 0px">
								Мы стараемся давать обратную связь по всем резюме. Если же вам все таки не ответили в течение 2 недель, значит вакансия уже занята, либо ваш текущий набор навыков не полностью соответствует нашим требованиям.
							</Text>
							<Text font="24px/30px 'AvenirNextCyrMedium', sans-serif" color="#333" margin="20px 0px 16px 0px">
								Всегда можно попробовать ещё раз
							</Text>
							<Text font="18px/26px 'AvenirNextCyrRegular', sans-serif" color="#333" margin="0px 0px 16px 0px">
								В случае отказа вы всегда можете связаться с нами через некоторое время, когда появится новая интересная вам вакансия или вы решите, что набрали больше опыта и навыков.
							</Text>
							<Box display="flex" justify-content="center" margin="32px 0px 0px 0px">
								<Link
									href="/resume/#three"
									text-align="center"
									text-decoration-line="initial"
									border-width="2px"
									border-style="solid"
									border-color="#4a8cfa"
									background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/arrow-right-blue.svg?v=2021-02-10T23:40:29.406Z) 90% center/auto no-repeat scroll padding-box"
									padding="0px 68px 1px 15px"
									color="#4a8cfa"
									transition="all 0.2s linear 0s"
									font="600 16px/46px AvenirNextCyrRegular, sans-serif"
									border-radius="5px"
									hover-color="#ffffff"
									hover-background="#4a8cfa url(https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/arrow-right-white.svg?v=2021-02-10T23:44:24.127Z) 90% center/auto no-repeat scroll padding-box"
								>
									Собеседование
								</Link>
							</Box>
						</Components.Tab2>
						<Components.Tab2 tabId="three">
							<Box>
								<Text color="#263238" font="36px 'AvenirNextCyrRegular'" margin="0px 0px 16px 0px">
									Собеседование
								</Text>
								<Text font="18px/26px 'AvenirNextCyrRegular', sans-serif" color="#333">
									Процесс собеседования может включать в себя несколько встреч, которые могут быть как личными, так и удаленными.
									<br />
								</Text>
								<Text font="24px/30px 'AvenirNextCyrMedium', sans-serif" color="#333" margin="20px 0px 16px 0px">
									Что будет на собеседовании
								</Text>
							</Box>
							<Text font="18px/26px 'AvenirNextCyrRegular', sans-serif" color="#333" margin="0px 0px 16px 0px">
								Разговор о вас
								<br />
							</Text>
							<Text font="18px/26px 'AvenirNextCyrRegular', sans-serif" color="#333" margin="0px 0px 16px 0px">
								При проведении интервью мы будем интересоваться вашими амбициями, активностью жизненной позиции, отношением к себе и окружающим. И про ваши вкусы в искусстве и хобби тоже обязательно спросим.
							</Text>
							<Text font="18px/26px 'AvenirNextCyrRegular', sans-serif" color="#333" margin="0px 0px 16px 0px">
								Тестовое задание и профессиональные вопросы
								<br />
							</Text>
							<Text font="18px/26px 'AvenirNextCyrRegular', sans-serif" color="#333" margin="0px 0px 16px 0px">
								Будьте готовы отвечать на конкретные профессиональные вопросы: если вы программист — писать код, если дизайнер — обсуждать интерфейсные решения. Некоторые позиции в компании предполагают небольшие тестовые задания.
							</Text>
							<Text font="24px/30px 'AvenirNextCyrMedium', sans-serif" color="#333" margin="20px 0px 16px 0px">
								Собеседование может быть удалённым
							</Text>
							<Text font="18px/26px 'AvenirNextCyrRegular', sans-serif" color="#333" margin="0px 0px 16px 0px">
								Часто нам приходится проводить собеседования с кандидатами из других городов удаленно — в Skype. Не забывайте, удаленное собеседование не менее серьезно, чем личное: стоит помнить о пунктуальности и правилах этикета. Мы очень советуем заранее позаботиться о хорошем интернет-соединении, наличии веб-камеры и качественном звуке.
								<br />
							</Text>
							<Box display="flex" justify-content="center" margin="32px 0px 0px 0px">
								<Components.PopUp
									left="-30px"
									bottom="auto"
									right="auto"
									top="40%"
									transition="all 0.5s ease 0s"
								>
									<Override
										slot="button"
										className="noprint"
										color="#263238"
										font="normal 500 16px/50px 'AvenirNextCyrMedium', sans-serif"
										letter-spacing=".1px"
										background="#ffd83a"
										padding="0px 15px 0px 15px"
										transition="all 0.2s linear 0s"
										left="-30px"
										bottom="auto"
										right="auto"
										top="40%"
										hover-left="0px"
										border-radius="5px"
										margin="0px 0px 10px 0px"
										hover-background="#e6c235"
									>
										Откликнуться на вакансию
									</Override>
									<Override
										slot="wrapper"
										background="#ffffff"
										max-width="672px"
										width="100%"
										margin="0px 0px 0px 0px"
										padding="0px 0px 0px 0px"
										border-radius="0px"
										height="100%"
										overflow-y="scroll"
										max-height="1150px"
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
						</Components.Tab2>
					</Components.Tabs2>
				</StackItem>
				{"        "}
			</Stack>
		</Section>
		<Section padding="60px 0 60px 0" sm-padding="60px 0 60px 0" lg-padding="40px 0 40px 0" background="#eef2f3">
			<Override slot="SectionContent" align-items="center" />
			<Stack margin="0px 0px 0px 0px" max-width="1170px" width="100%">
				<StackItem width="100%">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					<Text
						font="normal 400 48px/54px 'AvenirNextCyrMedium', sans-serif"
						color="#4a8cfa"
						text-align="center"
						padding="0px 20% 0px 20%"
						margin="0px 0px 30px 0px"
						lg-padding="0px 0px 0px 0px"
						sm-font="normal 400 24px/34px 'AvenirNextCyrMedium', sans-serif"
					>
						7 советов, как понравиться нашему HR-менеджеру:
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
						01
					</Text>
					<Text
						font="normal 300 18px/26px 'AvenirNextCyrRegular', sans-serif"
						color="#58646f"
						padding="0px 0px 0px 0px"
						margin="0px 0px 16px 0px"
						sm-text-align="center"
					>
						Не забывайте о правилах этикета. На работу можно опоздать, на собеседование — ни в коем случае
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
						font="normal 300 18px/26px 'AvenirNextCyrRegular', sans-serif"
						color="#58646f"
						padding="0px 0px 0px 0px"
						margin="0px 0px 16px 0px"
						sm-text-align="center"
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
					<Text font="normal 400 48px/54px 'AvenirNextCyrMedium', sans-serif" color="#aec1d9" padding="0px 0px 0px 0px" margin="0px 0px 16px 0px">
						04
					</Text>
					<Text
						font="normal 300 18px/26px 'AvenirNextCyrRegular', sans-serif"
						color="#58646f"
						padding="0px 0px 0px 0px"
						margin="0px 0px 16px 0px"
						sm-text-align="center"
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
					<Text font="normal 400 48px/54px 'AvenirNextCyrMedium', sans-serif" color="#aec1d9" padding="0px 0px 0px 0px" margin="0px 0px 16px 0px">
						05
					</Text>
					<Text
						font="normal 300 18px/26px 'AvenirNextCyrRegular', sans-serif"
						color="#58646f"
						padding="0px 0px 0px 0px"
						margin="0px 0px 16px 0px"
						sm-text-align="center"
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
						font="normal 300 18px/26px 'AvenirNextCyrRegular', sans-serif"
						color="#58646f"
						padding="0px 0px 0px 0px"
						margin="0px 0px 16px 0px"
						sm-text-align="center"
					>
						Задавайте нам вопросы.
						<br />
						Любые: о зарплате, отпуске, обеде и том, как быстро влиться в коллектив
					</Text>
				</StackItem>
				<StackItem width="33.333%" lg-display="none">
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
					<Text font="normal 400 48px/54px 'AvenirNextCyrMedium', sans-serif" color="#aec1d9" padding="0px 0px 0px 0px" margin="0px 0px 16px 0px">
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