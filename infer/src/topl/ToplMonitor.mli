(*
 * Copyright (c) 2019-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *)

open! IStd

val generate : ToplAutomaton.t -> Typ.Procname.t -> Procdesc.t option
(** [generate automaton proc_name] returns a CFG, provided that [proc_name] is a recognized procedure name *)

val sourcefile : SourceFile.t
(** For debug. *)

val cfg : Cfg.t
(** For debug. This datastructure accumulates all the procedures that were synthesized by the
current process. If the implementation is correct, then different processes synthesize the same
procedures, given the same set of Topl properties. However, for debug, we print the datastructure
in a filename that contains the PID, which is why [sourcefile] is exposed. *)
