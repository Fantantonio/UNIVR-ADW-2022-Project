PGDMP                         z           adw_data    14.5    14.5     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16467    adw_data    DATABASE     d   CREATE DATABASE adw_data WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Italian_Italy.1252';
    DROP DATABASE adw_data;
                postgres    false            �            1259    16468    utente    TABLE     �   CREATE TABLE public.utente (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    nomeutente character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    ruolo integer NOT NULL
);
    DROP TABLE public.utente;
       public         heap    postgres    false            �            1259    16473 
   utentetest    TABLE     �  CREATE TABLE public.utentetest (
    id integer NOT NULL,
    id_utente integer NOT NULL,
    nome_test character varying(255) NOT NULL,
    data_test character varying(255) NOT NULL,
    nome_ultima_domanda character varying(255) DEFAULT ''::character varying,
    ordine_domande character varying(255) DEFAULT ''::character varying,
    id_risposte_date character varying(255) DEFAULT ''::character varying
);
    DROP TABLE public.utentetest;
       public         heap    postgres    false            �            1259    16481    utentetest_id_seq    SEQUENCE     �   ALTER TABLE public.utentetest ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.utentetest_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    210            �          0    16468    utente 
   TABLE DATA           H   COPY public.utente (id, email, nomeutente, password, ruolo) FROM stdin;
    public          postgres    false    209   t       �          0    16473 
   utentetest 
   TABLE DATA           �   COPY public.utentetest (id, id_utente, nome_test, data_test, nome_ultima_domanda, ordine_domande, id_risposte_date) FROM stdin;
    public          postgres    false    210   �                   0    0    utentetest_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.utentetest_id_seq', 754, true);
          public          postgres    false    211            d           2606    16483 #   utente uk_3i6r1iw01mvwul5ba0n7wtto4 
   CONSTRAINT     d   ALTER TABLE ONLY public.utente
    ADD CONSTRAINT uk_3i6r1iw01mvwul5ba0n7wtto4 UNIQUE (nomeutente);
 M   ALTER TABLE ONLY public.utente DROP CONSTRAINT uk_3i6r1iw01mvwul5ba0n7wtto4;
       public            postgres    false    209            f           2606    16485 #   utente uk_gxvq4mjswnupehxnp35vawmo2 
   CONSTRAINT     _   ALTER TABLE ONLY public.utente
    ADD CONSTRAINT uk_gxvq4mjswnupehxnp35vawmo2 UNIQUE (email);
 M   ALTER TABLE ONLY public.utente DROP CONSTRAINT uk_gxvq4mjswnupehxnp35vawmo2;
       public            postgres    false    209            h           2606    16487    utente utente_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.utente
    ADD CONSTRAINT utente_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.utente DROP CONSTRAINT utente_pkey;
       public            postgres    false    209            j           2606    16526    utentetest utentetest_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.utentetest
    ADD CONSTRAINT utentetest_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.utentetest DROP CONSTRAINT utentetest_pkey;
       public            postgres    false    210            k           2606    16507    utentetest id_utente    FK CONSTRAINT     v   ALTER TABLE ONLY public.utentetest
    ADD CONSTRAINT id_utente FOREIGN KEY (id_utente) REFERENCES public.utente(id);
 >   ALTER TABLE ONLY public.utentetest DROP CONSTRAINT id_utente;
       public          postgres    false    210    3176    209            �   U   x�]�1�  ��}L#�|���K�bH�&|���7�����9�5r�<j�Kl�QZSp~^`B�O���_��R����/7��      �   z   x�M�1
�0��Y:�`[�1��]��['���	��_��<<�;�U��u��f��w����'�0��$G�-�,g&K�B���"�V9�f�ñ^R����B�l�3�a��"� �G,�     