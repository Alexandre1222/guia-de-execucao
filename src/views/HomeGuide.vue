<script setup>
import {ref} from "vue";
const open_card_intro = ref(true);
const open_card_como_usar = ref(false);
const open_card_conclusao = ref(false);

const open_card_pillar = ref({})

function toggle_card(nivel) {
  if (nivel === "intro") {
    open_card_intro.value = !open_card_intro.value
    open_card_como_usar.value = false
    open_card_conclusao.value = false

  } else if (nivel === "como_usar") {
    open_card_intro.value = false
    open_card_como_usar.value = !open_card_como_usar.value
    open_card_conclusao.value = false

  } else if (nivel === "conclusao") {
    open_card_intro.value = false
    open_card_como_usar.value = false
    open_card_conclusao.value = !open_card_conclusao.value
  }
}

</script>

<template>
  <v-responsive class="mx-auto" max-width="1200">
    <v-container fluid>
      <v-card color="white" class="mx-auto mb-2" :prepend-icon="open_card_intro ?  'mdi-chevron-up' : 'mdi-chevron-down'"
              style="cursor: pointer"
              @click.stop="toggle_card( 'intro')">
        <template v-slot:title>
          <span class="text-wrap text-primary">Introdução</span>
        </template>
        <v-slide-y-transition>
          <v-card v-show="open_card_intro">
            <v-card-text class="text-wrap line-height-custom">
              Produção de conteudo em andamento
              <!--            <p>Bem-vindos ao Guia de Execução Ipiranga, um guia essencial destinado aos consultores de trade que se
                            dedicam diariamente a manter a excelência e a eficiência em nossas operações.
                          </p><br>

                          <p>Nosso objetivo é garantir que cada interação em nossos postos seja uma experiência positiva, refletindo o
                            propósito da Ipiranga de "Abastecer a vida em movimento".
                          </p><br>

                          <p>Cada seção deste guia foi cuidadosamente elaborada para fornecer informações claras e práticas.
                            Encorajamos todos os colaboradores a se familiarizarem com este material, utilizando-o como um recurso
                            para aprimorar suas habilidades e conhecimentos.</p><br>

                            <p>Este guia de execução é um roteiro detalhado e estruturado em 8 (oito) partes fundamentais, cada uma delas
                            cuidadosamente elaborada, para abordar todos os aspectos cruciais do funcionamento de um posto
                            Ipiranga:</p><br>

                          <p>
                            1. Sinalização Obrigatória: A primeira impressão é sempre a que fica. Aqui, destacamos a importância da sinalização correta e eficaz, assegurando que cada cliente se sinta bem-vindo e possa se locomover facilmente pelo espaço do posto.</p><br>
                          <p>2. Marca e Comunicação: A essência da Ipiranga transcende a oferta de produtos de qualidade. Nesta seção, mergulhamos nos pilares da marca, enfatizando como cada colaborador pode personificar a missão de "Abastecer a vida em movimento.</p><br>
                          <p>3. Áreas do Posto: Um manual completo das diferentes zonas dentro de um posto Ipiranga, desde as bombas de combustível até as áreas de descanso, garantindo que cada espaço seja otimizado para atender às necessidades dos clientes e colaboradores</p><br>
                          <p>4. Produtos: Detalhamos a gama de produtos oferecidos, incluindo gasolina, etanol, diesel e lubrificantes, e explicamos como a qualidade destes produtos se alinha à promessa da marca Ipiranga</p><br>
                          <p>5. Atendimento: O atendimento ao cliente é a espinha dorsal de nossa operação. Esta seção estabelece as diretrizes de interação com o cliente, assegurando um serviço que não apenas atenda, mas supere as expectativas.</p><br>
                          <p>6. Atividades Promocionais: Uma visão geral das campanhas promocionais atuais e como elas podem ser implementadas de forma eficaz para impulsionar as vendas e fortalecer o relacionamento com os clientes.</p><br>
                          <p>7. Equipamentos: Conhecimento detalhado sobre cada equipamento, desde a bomba de gasolina até o calibrador de pneus, garantindo que todos estejam operando de forma segura e eficiente.</p><br>
                          <p>8. Serviços: Encerramos com uma exploração dos diversos serviços oferecidos, enfatizando como cada um contribui para uma experiência abrangente e satisfatória para o cliente</p><br>
                          <p>Convidamos cada consultores a se aprofundar neste guia, absorvendo o conhecimento que torna os Postos Ipiranga sinônimos de qualidade, confiança e inovação no setor de combustíveis. Juntos, vamos continuar a abastecer a vida em movimento de cada cliente que escolhe a Ipiranga.</p><br>-->
            </v-card-text>
          </v-card>
        </v-slide-y-transition>
      </v-card>
    </v-container>
  </v-responsive>
</template>

<style scoped>

</style>