import wikiDemoImage from '../assets/wiki-demo.png';
import {
  WikiContent,
  WikiFigure,
  WikiHighlight,
  WikiSection,
  WikiSubsection,
  WikiTitle,
} from '../components/wiki';

const WikiDemo = () => {
  return (
    <div className="min-h-screen bg-[#F3EFE0]">
      <WikiContent>
        <WikiTitle eyebrow="Wiki demo">Description</WikiTitle>

        <WikiSection title="Inspiration">
          <p>
            In China, <WikiHighlight>colorectal cancer (CRC)</WikiHighlight>{' '}
            poses a substantial and growing disease burden. It is estimated that
            in 2024, there will be approximately 333,821 new cases and 158,830
            deaths, accounting for about 10.3% of total new cancer cases and 9.3%
            of total cancer deaths in the country, making it the fifth leading
            cause of cancer-related mortality.[1] The incidence of CRC in China
            continues to rise, a trend closely linked to the expanding adult
            population and aging demographic structure. The increase in CRC
            mortality is also primarily driven by these two factors. Furthermore,
            older patients often have comorbidities, which imposes higher demands
            on the tolerability of existing treatments.[2] As a common cancer,
            improvements in the survival rate of CRC remain hindered by
            limitations in current therapies, such as drug resistance and a lack
            of treatment options for specific molecular subtypes.[1] Inspired by
            this situation, our project aims to investigate the current status and
            challenges of colorectal cancer, propose innovative solutions to
            therapeutic bottlenecks while ensuring clinical safety, and enhance
            public awareness of cancer care and clinical challenges.
          </p>
        </WikiSection>

        <WikiSection title="Background">
          <p>
            Currently,{' '}
            <WikiHighlight>
              conventional therapies such as surgery, chemotherapy, and
              radiotherapy remain the foundational and core approaches for
              treating colorectal cancer (CRC).
            </WikiHighlight>
          </p>

          <p>
            However, these treatments are often associated with significant side
            effects and complex complications, and their efficacy is limited in a
            subset of patients. On the other hand, while targeted therapies have
            shown promising results in specific populations, they can induce
            severe immunosuppressive responses, potentially leading to disease
            progression.[3]
          </p>

          <p>
            In recent years, ferroptosis, a form of non-apoptotic cell death, has
            gained considerable attention. Its molecular mechanism centrally
            involves the system Xc⁻ cystine/glutamate antiporter (composed of
            SLC7A11 and SLC3A2 subunits). This transporter exports glutamate and
            imports cystine, which is essential for synthesizing glutathione (GSH)
            and maintaining the activity of glutathione peroxidase 4 (GPX4),
            thereby suppressing lipid peroxidation and ferroptosis.[4]
          </p>

          <p>
            Elevated glutamate levels in the tumor microenvironment can
            competitively inhibit system Xc⁻ function, resulting in reduced
            cystine uptake, impaired GSH synthesis, and decreased GPX4 activity.[5]
            This process, combined with inherent iron metabolism dysregulation in
            CRC cells, synergistically promotes the accumulation of lipid
            peroxides, ultimately triggering characteristic morphological changes
            of ferroptosis, such as mitochondrial shrinkage and increased membrane
            density, driving cancer cell death.[5]
          </p>

          <p>
            Building on this mechanism, we can visualize the key metabolic
            pathways involved in ferroptosis regulation:
          </p>

          <WikiFigure
            src={wikiDemoImage}
            alt="Key metabolic pathways involved in ferroptosis regulation"
            caption={
              <>
                <span className="font-extrabold text-[#00B351]">Figure 1.</span>{' '}
                Key metabolic pathways involved in ferroptosis regulation.
              </>
            }
          />
        </WikiSection>

        <WikiSection title="Our Solution">
          <WikiSubsection title="GLU-FIRE Strategy Overview" />
          <p>
            Based on this, we have developed a &quot;Glutamate-driven Ferroptosis
            Induction by Recombinant E. coli&quot; (GLU-FIRE) strategy within the
            tumor-specific microenvironment. Genetically engineered bacteria can
            accumulate in tumor regions and specifically express exogenous genes
            in this microenvironment, thereby precisely inducing ferroptosis in
            tumor cells while minimizing nonspecific damage to healthy tissues.
          </p>

          <p>
            To translate this strategy into a viable therapeutic approach, we
            established a research system combining dry and wet lab work.
          </p>

          <WikiSubsection title="Wet Lab Development: GLU-FIRE Engineered Bacterial Delivery System" />
          <p>
            On the wet lab side, we developed the GLU-FIRE engineered bacterial
            delivery system. This system uses E. coli MG1655 as the chassis. Two
            functional plasmids were introduced for precise regulation:
          </p>

          <p>
            Plasmid 3 serves as the &quot;logic gate activation plasmid.&quot; It
            utilizes the typical hypoxic signal (via the pPepT promoter) and mild
            heat shock signal (via the pL promoter) found in the tumor
            microenvironment to drive the expression of the C-terminal (T7C) and
            N-terminal (T7N) fragments of a split T7 RNA polymerase, respectively.
          </p>

          <p>
            Plasmid 4 acts as the &quot;target gene expression plasmid,&quot; carrying the
            genes for isocitrate dehydrogenase (icd) and glutamate dehydrogenase
            (gdhA) under the control of a T7 promoter. Only when Plasmid 3 is
            activated in the tumor microenvironment and assembles a functional T7
            polymerase can Plasmid 4 initiate high-efficiency expression of icd
            and gdhA. This achieves precise spatiotemporal control over
            &quot;tumor microenvironment-specific high-yield glutamate
            production.&quot;
          </p>
        </WikiSection>
      </WikiContent>
    </div>
  );
};

export default WikiDemo;
