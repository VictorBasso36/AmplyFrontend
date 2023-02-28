

import styles from '@/styles/Components/Metodos/Metodos.module.css'
import Link from 'next/link'
import { useState, useEffect, useRef  } from 'react'
import Lottie from 'lottie-web';
import CloseBtn from 'components/InputsAndButtons/closeBTN'
import animationData from '../../../public/methodAmply.json';

export default function Metodos() {
  const [menuTecnico, setmenuTecnico] = useState(false)
  useEffect(() => {
    if (menuTecnico) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
  }, [menuTecnico]);



  const containerRef = useRef(null);
  useEffect(() => {
      const anim = Lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationSpeed:2,
        fps: 30, // Definindo a taxa de quadros 
        animationData: animationData,
      });
  
      return () => {
        anim.destroy(); // Garante que a animação seja removida da memória quando o componente for desmontado
      };
    }, []); // Passa um array vazio para garantir que o useEffect seja executado apenas uma vez
  
  return (
    <> 
      <section className={styles.MainMetodos} id="Metodos">
        <div className={styles.MainMetodosContainer}>
          <div className={styles.MethodTexts}>
            <h3>Método</h3>
            <div className={styles.MethodText}>
              <h4><span>#</span>Desempenho</h4>
              <p>Projetos web de alta performance são essenciais para o sucesso de qualquer aplicação online. Por isso, a amply investe em tecnologias e técnicas avançadas para garantir a <span>velocidade</span> e <span>eficiência</span> de suas soluções web, proporcionando uma experiência de usuário excepcional e aumentando a conversão dos clientes.</p>
            </div>
            <div className={styles.MethodText}>
              <h4><span>#</span>SEO</h4>
              <p>Utilizando técnicas de SEO, como URLs amigáveis, para criar sites altamente visíveis e relevantes nos motores de busca. Além disso, a empresa emprega métodos de build para otimizar a estrutura do site, criação de conteúdo relevante e uso de palavras-chave estratégicas. Com isso, os sites desenvolvidos pela amply garantem um maior <span>tráfego orgânico</span> e uma melhor conversão para os clientes.</p>
            </div>
            <div className={styles.MethodText}>
              <h4><span>#</span>Tecnologia</h4>
              <p>Se você deseja ampliar as possibilidades da sua <span>presença digital</span>, é essencial investir em soluções web inovadoras e eficientes. Nós acreditamos nisso. Com nossos projetos web e o método <span>Amply de desenvolvimento</span>, sua empresa pode expandir sua visibilidade online, fornecer uma experiência de usuário única e sempre oferecer o melhor aos seus clientes.</p>
            </div>

          </div>
          <div className={styles.MethodImages}>
            <div ref={containerRef} style={{marginTop:'0px', marginBottom:'60px', width:'70%', maxWidth:'650px', height: 'auto'}} src="https://baldoo.com.br/Amply/AmplyImages/renamed2.png"></div>
            <button className={styles.ButtonModalButton} onClick={() => setmenuTecnico(true)} ><p>LEIA NOSSO MÉTODO EM TECNIQUÊS!</p><span className={styles.ButtonModalSpan}></span></button>
          </div>
        </div>
      </section>
      {menuTecnico &&
      <div className={styles.Modal}>
        <div className={styles.ModalContainer}>
          <div  className={styles.ModalClose} onClick={() => setmenuTecnico(false)} >
            <CloseBtn />
          </div>
          <div className={styles.ConteudoModal}>
             <div className={styles.TextTecnic}>
              <h3><span>#</span>Tecnologia</h3>
              <p>
              Especializados em soluções tecnológicas personalizadas que analisam cuidadosamente os problemas de seus clientes e identificam a tecnologia ideal para resolvê-los. Com um amplo conjunto de ferramentas e recursos, incluindo Next.js, React.js, JavaScript, Node.js, Laravel, PHP, HTML, CSS, Tailwind CSS, bancos de dados MySQL, MongoDB e cache, a Amply tem tudo o que é necessário para desenvolver soluções altamente eficazes e personalizadas.
              <br />
              Além disso, a empresa utiliza bibliotecas de estilização e efeitos e SEO avançado baseado em avaliação do Google, bem como técnicas de código e build como SSG, SSR e ISR. Com a Amply, você pode ter certeza de que receberá soluções tecnológicas de última geração que impulsionarão o crescimento e o sucesso de sua empresa.
              </p>
              

            </div>
            <div className={styles.TextTecnic}>
              <h3><span>#</span>Versionamento e backup</h3>
              <p>
              Todo e qualquer projeto, independentemente de tamanho e função, é documentado via GitHub. A plataforma de desenvolvimento colaborativo e gerenciamento de código-fonte permite que os desenvolvedores armazenem e gerenciem seus projetos de software, bem como colaborem com outros desenvolvedores em projetos comuns. 
              <br />
              <br />
              O GitHub usa o sistema de controle de versão Git para gerenciar as alterações no código-fonte e permite que os desenvolvedores criem "branchs" (ramificações) para trabalhar em novas funcionalidades sem afetar o código principal. Ele também oferece recursos como rastreamento de problemas e gerenciamento de tarefas. O repositório é de propriedade do cliente e, em caso de fim de relação, será entregue o repositório, imagens e bancos de dados.
              </p>
            </div>
            <div className={styles.TextTecnic}>
              <h3><span>#</span>SEO</h3>
              <p>
              Para potencializar o SEO e o marketing orgânico, o SEO (Search Engine Optimization) é o processo de otimizar um site ou página para que ele seja melhor classificado e apareça com mais frequência nos resultados de busca orgânica dos motores de busca, como o Google, Bing ou Yahoo. O objetivo do SEO é aumentar a quantidade e a qualidade do tráfego do site, tornando-o mais fácil de encontrar para os usuários dos motores de busca. Existem várias técnicas de SEO, como otimizar as palavras-chave, criar conteúdo de qualidade, melhorar a estrutura do site e construir backlinks de alta qualidade. 
              <br />
              <br />
               O SEO é uma parte crítica do marketing digital e é importante para aumentar a visibilidade e a autoridade de um site. Usamos técnicas avançadas e métodos de construção como SSG, SSR, ISR. Usando a técnica certa para a necessidade, podemos alcançar facilmente a primeira página do Google, além de obter excelentes notas no Google Page Speed Insights, além de acompanharmos constantemente a evolução do projeto pelo Google Search Console. Para obter melhores velocidades e disponibilidade, usamos o cache da Cloudflare.
              </p>
            </div>
            <div className={styles.TextTecnic}>
              <h3><span>#</span>Design e Layout</h3>
              <p>
              Layout de um site se refere à estrutura visual de uma página web, incluindo a disposição de elementos como texto, imagens, vídeos, botões e outros elementos de interface. O layout de um site é projetado para organizar e apresentar informações de maneira clara e eficiente, permitindo que os usuários encontrem facilmente o que estão procurando e naveguem com facilidade. Ele também pode ser usado para transmitir uma mensagem de marca e estabelecer uma estética visual atraente para o site.
              <br /><br />
              Existem vários tipos de layouts de sites, como o layout fluido, o layout de grade e o layout responsivo. Nessa parte, tudo é possível. Desenhamos e construímos layouts de sites, web e apps utilizando o Pacote Adobe e Figma. Todo o layout é pré-aprovado com o cliente antes de ser programado.</p>
            </div>
            <div className={styles.TextTecnic}>
              <h3><span>#</span>Amply</h3>
              <p>
              A Amply é uma empresa especializada em desenvolvimento web e de aplicativos, com uma equipe altamente qualificada e experiente. Nós nos orgulhamos de nossa abordagem personalizada para cada projeto e nosso compromisso em fornecer soluções inovadoras e de alta qualidade para nossos clientes.
              <br /><br />
              Se você está procurando uma equipe de desenvolvimento confiável e experiente para ajudá-lo a criar o próximo grande aplicativo ou site, entre em contato conosco. Estamos ansiosos para trabalhar com você e ajudá-lo a alcançar seus objetivos de negócios.  </p>
            </div>
          </div>
         
        </div>
      </div>

      }
    </>
  )
}
