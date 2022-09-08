PGDMP                         z           adw_questions    14.5    14.5                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16394    adw_questions    DATABASE     i   CREATE DATABASE adw_questions WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Italian_Italy.1252';
    DROP DATABASE adw_questions;
                postgres    false            �            1259    16395    domanda    TABLE     �   CREATE TABLE public.domanda (
    nome character varying(255) NOT NULL,
    ordinecasuale boolean,
    punti integer,
    risposteconnumero boolean,
    testo character varying(255)
);
    DROP TABLE public.domanda;
       public         heap    postgres    false            �            1259    16400    hibernate_sequence    SEQUENCE     {   CREATE SEQUENCE public.hibernate_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.hibernate_sequence;
       public          postgres    false            �            1259    16437    intest    TABLE     �   CREATE TABLE public.intest (
    id integer NOT NULL,
    datatest character varying(255) NOT NULL,
    nometest character varying(255) NOT NULL,
    domanda character varying(255)
);
    DROP TABLE public.intest;
       public         heap    postgres    false            �            1259    16401    risposta    TABLE     �   CREATE TABLE public.risposta (
    id integer NOT NULL,
    punteggio real,
    testo character varying(255) NOT NULL,
    domanda character varying(255),
    nome character varying(255)
);
    DROP TABLE public.risposta;
       public         heap    postgres    false            �            1259    16406    test    TABLE     �   CREATE TABLE public.test (
    data character varying(255) NOT NULL,
    nome character varying(255) NOT NULL,
    domandeconnumero boolean DEFAULT false,
    ordinecasuale boolean DEFAULT false
);
    DROP TABLE public.test;
       public         heap    postgres    false            �            1259    16449    utente    TABLE     �   CREATE TABLE public.utente (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    nomeutente character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    ruolo integer NOT NULL
);
    DROP TABLE public.utente;
       public         heap    postgres    false            
          0    16395    domanda 
   TABLE DATA           W   COPY public.domanda (nome, ordinecasuale, punti, risposteconnumero, testo) FROM stdin;
    public          postgres    false    209   �                 0    16437    intest 
   TABLE DATA           A   COPY public.intest (id, datatest, nometest, domanda) FROM stdin;
    public          postgres    false    213   +"                 0    16401    risposta 
   TABLE DATA           G   COPY public.risposta (id, punteggio, testo, domanda, nome) FROM stdin;
    public          postgres    false    211   �"                 0    16406    test 
   TABLE DATA           K   COPY public.test (data, nome, domandeconnumero, ordinecasuale) FROM stdin;
    public          postgres    false    212   $                 0    16449    utente 
   TABLE DATA           H   COPY public.utente (id, email, nomeutente, password, ruolo) FROM stdin;
    public          postgres    false    214   �$                  0    0    hibernate_sequence    SEQUENCE SET     B   SELECT pg_catalog.setval('public.hibernate_sequence', 102, true);
          public          postgres    false    210            o           2606    16412    domanda domanda_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.domanda
    ADD CONSTRAINT domanda_pkey PRIMARY KEY (nome);
 >   ALTER TABLE ONLY public.domanda DROP CONSTRAINT domanda_pkey;
       public            postgres    false    209            u           2606    16443    intest intest_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.intest
    ADD CONSTRAINT intest_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.intest DROP CONSTRAINT intest_pkey;
       public            postgres    false    213            q           2606    16414    risposta risposta_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.risposta
    ADD CONSTRAINT risposta_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.risposta DROP CONSTRAINT risposta_pkey;
       public            postgres    false    211            s           2606    16423    test test_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.test
    ADD CONSTRAINT test_pkey PRIMARY KEY (data, nome);
 8   ALTER TABLE ONLY public.test DROP CONSTRAINT test_pkey;
       public            postgres    false    212    212            w           2606    16459 #   utente uk_3i6r1iw01mvwul5ba0n7wtto4 
   CONSTRAINT     d   ALTER TABLE ONLY public.utente
    ADD CONSTRAINT uk_3i6r1iw01mvwul5ba0n7wtto4 UNIQUE (nomeutente);
 M   ALTER TABLE ONLY public.utente DROP CONSTRAINT uk_3i6r1iw01mvwul5ba0n7wtto4;
       public            postgres    false    214            y           2606    16457 #   utente uk_gxvq4mjswnupehxnp35vawmo2 
   CONSTRAINT     _   ALTER TABLE ONLY public.utente
    ADD CONSTRAINT uk_gxvq4mjswnupehxnp35vawmo2 UNIQUE (email);
 M   ALTER TABLE ONLY public.utente DROP CONSTRAINT uk_gxvq4mjswnupehxnp35vawmo2;
       public            postgres    false    214            {           2606    16455    utente utente_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.utente
    ADD CONSTRAINT utente_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.utente DROP CONSTRAINT utente_pkey;
       public            postgres    false    214            }           2606    16432 $   risposta fkm1f0frlgauoamfnq8a0akyfad    FK CONSTRAINT     �   ALTER TABLE ONLY public.risposta
    ADD CONSTRAINT fkm1f0frlgauoamfnq8a0akyfad FOREIGN KEY (nome) REFERENCES public.domanda(nome);
 N   ALTER TABLE ONLY public.risposta DROP CONSTRAINT fkm1f0frlgauoamfnq8a0akyfad;
       public          postgres    false    3183    211    209            ~           2606    16444 "   intest fknn7qilrreunloendsmu7y9p58    FK CONSTRAINT     �   ALTER TABLE ONLY public.intest
    ADD CONSTRAINT fknn7qilrreunloendsmu7y9p58 FOREIGN KEY (domanda) REFERENCES public.domanda(nome);
 L   ALTER TABLE ONLY public.intest DROP CONSTRAINT fknn7qilrreunloendsmu7y9p58;
       public          postgres    false    213    209    3183            |           2606    16417 $   risposta fks1xvm4yuwyr2ggcfl4aejrtd0    FK CONSTRAINT     �   ALTER TABLE ONLY public.risposta
    ADD CONSTRAINT fks1xvm4yuwyr2ggcfl4aejrtd0 FOREIGN KEY (domanda) REFERENCES public.domanda(nome);
 N   ALTER TABLE ONLY public.risposta DROP CONSTRAINT fks1xvm4yuwyr2ggcfl4aejrtd0;
       public          postgres    false    3183    209    211            
   �  x��UMo7=ۿbn�ZY�*�ݸh
�RN�=ƻԊ �\s�*�_�c�9���w��]�@C^��73o�`�1%{ao��ܻ֔:[�LyM�P�B�u�He;��`t{k�\)����L��K����-ޫ�R�S�]�FW�2���%z�?o�O��sN���M�qԟ��+Ԑ�#���-�g��qߐfѤm�S���k6���w�����@�`�^�I*y�l��!x}W�KW0[.↶T[�;�.��a�pUȽ��<?AE�ՈF�Ro|t2㯇K��b��'���q҃�% #����l*�$� �2W�>7�t��s!(���ƨ�+U��ɈZ?��0MF��vg[�î�,�|���#W?->��>/���ԇ�`��a:�p�x��ƌ+�].�۱��������y�p��5b�Oo,�P�*�Ǹ���_@��烙K�j�$�!!7r9V�:k̨���+*�[+���d���;����!�[�Ls��Dc;���Т�aR�s��WO��vK��)��\�^U@)�4=�٣�
�P���R��1I׬��E�ȑџ����ب�ѓF�t|ݠ9�Z�,P���O�	}�@U	�frR��!��@湸�$FR�mZ��[�ѧ����ӫ��c��L��)뱉8�^wס=~IMPЖ���t�����ȉd�ͺv�|�3`�����d�ڌ��DI�ǨP$�*�2�ѽ�+P&�x����d���Xd��_��r�����&�T�1Jz��WpJ͒�K����L$�Z���@	�L�Ak��g�E�y��Q�׭Ȩ�ckT��]� �nG��&��Ӕ3U`�e��?�'�I3ټ�
�g*�#��8(E���F#��dtѨ�k�:��;�'��ɨH��m7n�K������j�¿$��t��QA�
�v�����ky��p;�]��1]zW��Td�[b�%���mh��6�q��.q��U	�/�Z"�4�+���<E-�YL{��Kux�;bBlO��&�����v�<���]�4o���^I�q���q��$B�15k��T�C�X�6�
ȴ��t#�a�'��
��k(�Y��V�f�$��ܵ�\	q%KZj��pvS�l1W�`6����vQ�b� �����ݍ�+���;u�Nݎ����;n=Y         �   x���M
�0�u���%���E
�C7c�H����Sh��-d7_fx�Fa�1��L��	���I��AcORk�*	X�����6G�yb��_���n�+ь�H�܆��1�������?��'�Ġ����ˌ��iB�2PgZ����®���V�]]X$�eZp�*-r0�g������ <ɯ�            x�u�1n�0Eg�9A@R�,�;t�b�HСM����͠��:
����4�}<������s�z_Oj��:�$�9p=pߩʆs��|[/��n�c�:�8Y3�]�`�s8�p�Jt�t\��h�t#�)��wn2�M�*���/�A�Q2ganv^ ]��5k�9X�J��YX[��5kH3Xɂ��.�%��a��Ӷa�賃�T}Y���g�%�2���C�a�/�aA�Xe����zP���Ѕ^��4��^�         q   x�U�I
�0E��)r�J-��TD��đ@����X�ޟ��V�&z��+�@�Q�sH׵�x�}��{H��}J�.+����@���aS�ȑ��k�N�l�i����[��O�R�� '�         u   x�3��M,���K�L���tHK�+I,���K���(�O�S��+���9-S�-�R�L�RLR����R�R,��SSLM9��8s�R�J���R�RЌt�H)����f����� \�2�     