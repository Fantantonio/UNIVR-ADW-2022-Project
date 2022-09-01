-- Table: public.utentetest

-- DROP TABLE IF EXISTS public.utentetest;

CREATE TABLE IF NOT EXISTS public.utentetest
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    id_utente integer NOT NULL,
    nome_test character varying(255) COLLATE pg_catalog."default" NOT NULL,
    data_test character varying(255) COLLATE pg_catalog."default" NOT NULL,
    nome_ultima_domanda character varying(255) COLLATE pg_catalog."default" DEFAULT ''::character varying,
    ordine_domande character varying(255) COLLATE pg_catalog."default" DEFAULT ''::character varying,
    id_risposte_date character varying(255) COLLATE pg_catalog."default" DEFAULT ''::character varying,
    CONSTRAINT utentetest_pkey PRIMARY KEY (id_utente),
    CONSTRAINT id_utente FOREIGN KEY (id_utente)
        REFERENCES public.utente (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.utentetest
    OWNER to postgres;