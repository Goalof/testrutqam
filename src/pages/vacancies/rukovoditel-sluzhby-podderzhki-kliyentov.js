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
		<GlobalQuarklyPageStyles pageUrl={"vacancies/rukovoditel-sluzhby-podderzhki-kliyentov"} />
		<Helmet>
			<title>
				Руководитель службы клиентской поддержки
			</title>
			<meta name={"description"} content={"uKit Group (uCoz, uKit, RuSender, WebAsk) – это аккредитованная IT-компания, которая специализируется на создании SaaS-сервисов и более 19 лет создает онлайн-продукты, у которых миллионы пользователей.\n\nИщем руководителя службы клиентской поддержки."} />
			<meta property={"og:title"} content={"Руководитель службы клиентской поддержки"} />
			<meta property={"og:description"} content={"uKit Group (uCoz, uKit, RuSender, WebAsk) – это аккредитованная IT-компания, которая специализируется на создании SaaS-сервисов и более 19 лет создает онлайн-продукты, у которых миллионы пользователей.\n\nИщем руководителя службы клиентской поддержки."} />
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
		<Section lg-padding="120px 0 80px 0" padding="140px 0 60px 0" sm-padding="110px 0 40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Stack margin="0px 0px 0px 0px" max-width="850px">
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="flex-start" justify-content="flex-start" flex-direction="column" />
					{"        "}
					<Link
						className="noprint"
						href="/vacancies"
						text-decoration-line="initial"
						transition="color 0.2s linear 0s"
						hover-color="#3d72cc"
						display="flex"
						margin="0px 0px 20px 0px"
						color="#4a8cfa"
						font="14px 'AvenirNextCyrMedium', sans-serif"
					>
						<Icon
							margin="-1px 2px 0px -2px"
							hover-color="inherit"
							category="md"
							icon={MdKeyboardArrowLeft}
							color="inherit"
							size="20px"
						/>
						К списку вакансий
					</Link>
					<Text
						sm-margin="0px 0px 20px 0px"
						text-align="left"
						color="#263238"
						sm-font="normal 500 40px/1.2 'AvenirNextCyrDemi', sans-serif"
						as="h1"
						font="normal 500 44px/1.2 'AvenirNextCyrDemi', sans-serif"
						margin="0px 0px 25px -3px"
						display="inline-block"
					>
						Руководитель службы клиентской поддержки
					</Text>
					<Text
						margin="0px 0px 20px 0px"
						display="inline-block"
						sm-margin="0px 0px 10px 0px"
						text-align="center"
						color="#333"
						letter-spacing=".2"
						font="normal 400 18px/1.2 'AvenirNextCyrMedium', sans-serif"
					>
						Проект uKit, RuSender | Удаленно{"\n\n\n\n"}
					</Text>
					<Text
						font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif"
						margin="0px 0px 0px 0px"
						display="inline-block"
						sm-margin="10px 0px 20px 0px"
						letter-spacing="0.3px"
						color="#333"
					>
						uKit Group (uCoz, uKit, RuSender, WebAsk) – это аккредитованная IT-компания, которая специализируется на создании SaaS-сервисов и более 19 лет создает онлайн-продукты, у которых миллионы пользователей.
						<br />
						<br />
						Ищем руководителя службы клиентской поддержки.{"\n\n"}
					</Text>
					<Text
						color="#333"
						letter-spacing=".2"
						font="normal 400 20px/1.2 'AvenirNextCyrMedium', sans-serif"
						margin="20px 0px 18px 0px"
						display="inline-block"
						sm-margin="10px 0px 20px 0px"
						text-align="left"
					>
						Вам подойдет эта роль, если:
					</Text>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Вы начинали в технической поддержке и доросли до старшего специалиста или руководителя команды, работая с ESP, хостингом или регистраторами доменов.
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Вы email-маркетолог, который глубоко разбирается в работе ESP-сервисов и специфике клиентской поддержки.
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Вы проджект-менеджер, который понимает процессы клиентской поддержки и специфику email-рассылок, и готовы взять на себя руководство отделом.
						</Text>
					</List>
					<Text
						color="#333"
						letter-spacing=".2"
						font="normal 400 20px/1.2 'AvenirNextCyrMedium', sans-serif"
						margin="20px 0px 18px 0px"
						display="inline-block"
						sm-margin="10px 0px 20px 0px"
						text-align="left"
					>
						Проекты:
					</Text>
					<Text
						font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif"
						margin="0px 0px 0px 0px"
						display="inline-block"
						sm-margin="10px 0px 20px 0px"
						letter-spacing="0.3px"
						color="#333"
					>
						RuSender – сервис email-рассылок (ESP), который мы активно развиваем.
						<br />
						uKit – конструктор бизнес-сайтов.
						<br />
						<br />
						Поддержка пользователей ведется в письменном формате. В команде уже есть опытные специалисты – вам предстоит наладить процессы и повысить эффективность отдела.{"\n\n"}
					</Text>
					<Text
						color="#333"
						letter-spacing=".2"
						font="normal 400 20px/1.2 'AvenirNextCyrMedium', sans-serif"
						margin="20px 0px 18px 0px"
						display="inline-block"
						sm-margin="10px 0px 20px 0px"
						text-align="left"
					>
						Обязанности:
					</Text>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Выстраивание и оптимизация процессов работы службы поддержки, включая автоматизацию и повышение эффективности команды
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Обеспечение высокого уровня клиентского сервиса, включая анализ обращений, выявление проблемных зон и внедрение улучшений
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Доработка и внедрение мотивационной схемы и системы оценки работы отдела
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Актуализация и разработка внутренних и внешних регламентов поддержки и базы знаний
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Взаимодействие с командами разработчиков, продакт-менеджерами и тестировщиками для повышения качества сервиса
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Предложение улучшений по работе продукта на основе пользовательских обращений и личного видения
						</Text>
					</List>
					<Text
						color="#333"
						letter-spacing=".2"
						font="normal 400 20px/1.2 'AvenirNextCyrMedium', sans-serif"
						margin="20px 0px 18px 0px"
						display="inline-block"
						sm-margin="10px 0px 20px 0px"
						text-align="left"
					>
						Обязанности:
					</Text>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Понимание работы сервисов email-рассылок и клиентской поддержки в IT
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Понимание базовых принципов работы сайтов на уровне веб-мастера
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Опыт работы с любыми CMS, конструкторами сайтов
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Опыт формирования и обучения команды желателен
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Умение ставить подчиненным задачи и контролировать их выполнение
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Высокий уровень письменной грамотности
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Умение слушать и слышать клиента и руководство
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Безграничная любовь к людям и такая же безграничная стрессоустойчивость :)
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px" />
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
						Условия:
						<br />
						{"\n\n"}
					</Text>
					<Box
						margin="0px 0px 6px 0px"
						lg-margin="0px 0px 6px 0px"
						lg-align-items="flex-start"
						display="flex"
						align-items="center"
					>
						<Image
							width="15px"
							height="12px"
							padding="0px 0px 0px 0px"
							margin="0px 10px 0px 0px"
							lg-margin="12px 10px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/tick.svg?v=2021-02-04T00:08:19.533Z"
						/>
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="3px 0px 3px 0px">
							Официальное трудоустройство по ТК РФ или ГПХ при необходимости
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
							margin="0px 10px 0px 0px"
							lg-margin="12px 10px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/tick.svg?v=2021-02-04T00:08:19.533Z"
							width="15px"
							height="12px"
							padding="0px 0px 0px 0px"
						/>
						<Text margin="3px 0px 3px 0px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Конкурентная заработная плата с бонусами за результаты
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
							margin="0px 10px 0px 0px"
							lg-margin="12px 10px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/tick.svg?v=2021-02-04T00:08:19.533Z"
							width="15px"
							height="12px"
							padding="0px 0px 0px 0px"
						/>
						<Text margin="3px 0px 3px 0px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Гибкий график 5/2, с удобным началом рабочего дня до 10:00
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
							margin="0px 10px 0px 0px"
							lg-margin="12px 10px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/tick.svg?v=2021-02-04T00:08:19.533Z"
							width="15px"
							height="12px"
							padding="0px 0px 0px 0px"
						/>
						<Text margin="3px 0px 3px 0px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Полностью удаленная работа или гибридный/офисный формат (в Ростове-на-Дону или Баку)
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
							margin="0px 10px 0px 0px"
							lg-margin="12px 10px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/tick.svg?v=2021-02-04T00:08:19.533Z"
							width="15px"
							height="12px"
							padding="0px 0px 0px 0px"
						/>
						<Text margin="3px 0px 3px 0px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Для сотрудников в РФ — расширенная программа ДМС
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
							margin="0px 10px 0px 0px"
							lg-margin="12px 10px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/tick.svg?v=2021-02-04T00:08:19.533Z"
							width="15px"
							height="12px"
							padding="0px 0px 0px 0px"
						/>
						<Text margin="3px 0px 3px 0px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Современное рабочее оборудование для сотрудников офиса
						</Text>
					</Box>
					<Text
						color="#333"
						letter-spacing=".2"
						font="normal 400 20px/1.2 'AvenirNextCyrMedium', sans-serif"
						margin="20px 0px 12px 0px"
						display="inline-block"
						sm-margin="10px 0px 20px 0px"
						text-align="left"
					>
						Еще мы предлагаем:
					</Text>
					<Box
						display="flex"
						align-items="center"
						margin="0px 0px 6px 0px"
						lg-align-items="flex-start"
						lg-padding="0px 0px 0px 0px"
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
							Возможность профессионального роста и развития (митапы, обучение, доступ к корпоративной библиотеке)
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
							height="12px"
							padding="0px 0px 0px 0px"
							margin="0px 10px 0px 0px"
							lg-margin="12px 10px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/tick.svg?v=2021-02-04T00:08:19.533Z"
							width="15px"
						/>
						<Text margin="3px 0px 3px 0px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Работу в команде опытных специалистов, готовых делиться своим опытом
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
							height="12px"
							padding="0px 0px 0px 0px"
							margin="0px 10px 0px 0px"
							lg-margin="12px 10px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/tick.svg?v=2021-02-04T00:08:19.533Z"
							width="15px"
						/>
						<Text margin="3px 0px 3px 0px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Культуру открытости и взаимопомощи
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
							height="12px"
							padding="0px 0px 0px 0px"
							margin="0px 10px 0px 0px"
							lg-margin="12px 10px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/tick.svg?v=2021-02-04T00:08:19.533Z"
							width="15px"
						/>
						<Text margin="3px 0px 3px 0px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Культуру доверия: мы не используем системы контроля времени, для нас показатель — выполненная в срок задача
						</Text>
					</Box>
					<Text
						color="#333"
						letter-spacing=".2"
						font="normal 400 20px/1.2 'AvenirNextCyrMedium', sans-serif"
						margin="20px 0px 12px 0px"
						display="inline-block"
						sm-margin="10px 0px 20px 0px"
						text-align="left"
					>
						Ждем тебя в команде!
					</Text>
					<Components.PopUp
						transition="all 0.5s ease 0s"
						left="-30px"
						bottom="auto"
						right="auto"
						top="40%"
					>
						<Override
							slot="button"
							letter-spacing=".1px"
							margin="30px 0px 10px 0px"
							hover-background="#e6c235"
							background="#ffd83a"
							transition="all 0.2s linear 0s"
							bottom="auto"
							border-radius="5px"
							className="noprint"
							color="#263238"
							padding="0px 15px 0px 15px"
							right="auto"
							top="40%"
							font="normal 500 16px/50px 'AvenirNextCyrMedium', sans-serif"
							left="-30px"
							hover-left="0px"
						>
							Откликнуться на вакансию
						</Override>
						<Override
							slot="wrapper"
							border-radius="0px"
							max-width="672px"
							width="100%"
							margin="0px 0px 0px 0px"
							padding="0px 0px 0px 0px"
							background="#ffffff"
							height="100%"
							overflow-y="scroll"
							max-height="1150px"
						/>
						<Override
							slot="close"
							hover-color="#333"
							transition="color 0.3s ease 0s"
							color="#c5cfdb"
							padding="0.7rem 0.7rem .5rem .5rem"
							size="20px"
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